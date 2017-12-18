import config from '@/config'
import userDB from '@/database/user'
import balanceDB from '@/database/balance'
import userTransactionDB from '@/database/user_transaction'
import userApi from '@/api/user'
import defaultProfileImagePrimary from '@/assets/user_default_profile.png'
import defaultProfileImageNormal from '@/assets/user_default_profile_grey.png'

const state = {
  user: null,
  balances: []
}

const getters = {
  name: state => {
    if (state.user === null) return ''
    let name = ''
    if (state.user.firstName) {
      name += state.user.firstName
    }
    if (state.user.middleName) {
      if (name.length > 0) name += ' '
      name += state.user.middleName
    }
    if (state.user.lastName) {
      if (name.length > 0) name += ' '
      name += state.user.lastName
    }
    return name
  },
  emailAddress: state => state.user === null ? '' : state.user.emailAddress,
  primaryProfileImageURL: state => {
    let url = state.user === null ? '' : state.user.profileImageURL
    if (!url) {
      url = defaultProfileImagePrimary
    }
    return url
  },
  profileImageURL: state => {
    let url = state.user === null ? '' : state.user.profileImageURL
    if (!url) {
      url = defaultProfileImageNormal
    }
    return url
  },
  firstName: state => state.user === null ? '' : state.user.firstName,
  middleName: state => state.user === null ? '' : state.user.middleName,
  lastName: state => state.user === null ? '' : state.user.lastName,
  address: state => state.user === null ? '' : state.user.address,
  transactionsSearchResult: state => state.transactions.searchResult,
  transactionsPagerInfo: state => state.transactions.pagerInfo,
  balances: state => state.balances,
  balances4table: state => {
    let result = { snc: '0', snp: '0' }
    for (let i = 0; i < state.balances.length; i++) {
      const b = state.balances[i]
      switch (b.assetType) {
        case 'SNC':
          result.snc = b.amount
          break
        case 'SNP':
          result.snp = b.amount
          break
      }
    }
    return [ result ]
  }
}

const actions = {
  init ({ commit, state }) {
    if (state.user === null) {
      userDB.getUser().then(function (user) {
        if (user !== null) commit('setUser', user)
      }).catch(function (error) {
        throw error
      })
    }
  },
  save ({ commit, state }, user) {
    userDB.refresh(user)
    commit('setUser', user)
  },
  update ({ commit, state }, { profileImageFile, firstName, middleName, lastName, address, onSuccess, onError }) {
    userApi.update({ profileImageFile, firstName, middleName, lastName, address }).then(function (data) {
      if (data.exitCode !== 0) {
        onError(data.code, data.message)
        return
      }
      const user = {
        emailAddress: data.emailAddress,
        profileImageID: data.profileImageID,
        profileImageURL: data.profileImageURL,
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        address: data.address,
        isIdentified: data.isIdentified,
        isEmailVerified: data.isEmailVerified
      }
      userDB.refresh(user)
      commit('setUser', user)
      onSuccess()
    }).catch(function (error) {
      onError(null, null, error)
    })
  },
  loadBalances ({ commit, state }, { forceRefresh, callback }) {
    const fromLocal = function () {
      balanceDB.getBalances().then(function (balances) {
        commit('setBalances', balances)
        callback()
      }).catch(function (error) {
        throw error
      })
    }
    if (!forceRefresh) {
      fromLocal()
    } else {
      userApi.getBalances().then(function (data) {
        if (data.exitCode !== 0) {
          fromLocal()
          return
        }
        const balances = []
        const targetAssetTypes = config.assets
        for (let i = 0; i < targetAssetTypes.length; i++) {
          const def = targetAssetTypes[i]
          let target = null
          for (let j = 0; j < data.balances.length; j++) {
            const b = data.balances[j]
            if (b.assetType === def.name) {
              target = b
              break
            }
          }
          balances.push({
            assetType: def.name,
            amount: target === null ? '0' : (target.amount + '')
          })
        }
        balanceDB.refresh(balances)
        commit('setBalances', balances)
        callback()
      }).catch(function () {
        fromLocal()
      })
    }
  },
  getTransactions ({ commit, state }, { forceRefresh, pageNum, onSuccess, onError }) {
    const fromApi = function (onError) {
      userApi.getTransactions({ pageNum }).then(function (data) {
        if (data.exitCode !== 0) {
          onError(new Error(data.message))
          return
        }
        const userTransactions = data.userTransactions
        const totalCnt = data.totalCnt
        const totalPageNum = data.totalPageNum
        const currentPageNum = data.currentPageNum
        userTransactionDB.upsert(userTransactions)
        userTransactionDB.updateTotalCnt(totalCnt)
        onSuccess({ userTransactions, totalCnt, totalPageNum, currentPageNum })
      }).catch(function (error) {
        onError(error)
      })
    }
    const fromLocal = function (onError) {
      const pageSize = 20
      userTransactionDB.getTransactions(pageNum, pageSize).then(function (dbData) {
        const userTransactions = dbData.userTransactions
        const totalCnt = dbData.totalCnt
        const totalPageNum = Math.floor(totalCnt / pageSize)
        const currentPageNum = pageNum
        onSuccess({ userTransactions, totalCnt, totalPageNum, currentPageNum })
      }).catch(function (error) {
        onError(error)
      })
    }
    if (!forceRefresh) {
      fromLocal(function () {
        fromApi(function (error) {
          onError(error)
        })
      })
    } else {
      fromApi(function () {
        fromLocal(function (error) {
          onError(error)
        })
      })
    }
  },
  getTargetUser ({ commit, state }, { emailAddress, onSuccess, onError }) {
    userApi.getTargetUser({ emailAddress }).then(function (data) {
      if (data.exitCode !== 0) {
        onError(data.code, data.message, null)
        return
      }
      onSuccess({ data })
    }).catch(function (error) {
      onError(null, null, error)
    })
  },
  createTransaction ({ commit, state }, { emailAddress, assetType, amount, onSuccess, onError }) {
    userApi.createTransaction({ emailAddress, assetType, amount }).then(function (data) {
      if (data.exitCode !== 0) {
        onError(data.code, data.message, null)
        return
      }
      const userTransaction = data.userTransaction
      userTransactionDB.upsert(userTransaction)
      for (let i = 0; i < data.balances.length; i++) {
        const b = data.balances[i]
        const balance = {
          assetType: b.assetType,
          amount: b.amount + ''
        }
        balanceDB.updateBalance(balance)
        commit('setBalance', balance)
      }
      onSuccess({ data })
    }).catch(function (error) {
      onError(null, null, error)
    })
  }
}

const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setBalances (state, balances) {
    state.balances = balances
  },
  setBalance (state, balance) {
    const newBalances = []
    const balances = state.balances
    for (let i = 0; i < balances.length; i++) {
      const b = balances[i]
      if (b.assetType === balance.assetType) {
        newBalances.push(balance)
      } else {
        newBalances.push(b)
      }
    }
    state.balances = newBalances
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
