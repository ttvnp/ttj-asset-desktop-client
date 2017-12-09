import config from '@/config'
import userDB from '@/database/user'
import balanceDB from '@/database/balance'
import userApi from '@/api/user'
import defaultProfileImage from '@/assets/user_default_profile.png'

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
  profileImageURL: state => {
    let url = state.user === null ? '' : state.user.profileImageURL
    if (!url) {
      url = defaultProfileImage
    }
    return url
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
  getBalances ({ commit, state }, { forceRefresh, callback }) {
    const fromLocal = function () {
      balanceDB.getBalances().then(function (balances) {
        commit('setBalances', balances)
        callback(balances)
      }).catch(function (error) {
        throw error
      })
    }
    if (!forceRefresh) {
      fromLocal(callback)
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
        callback(balances)
      }).catch(function () {
        fromLocal()
      })
    }
  }
}

const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setBalances (state, balances) {
    state.balances = balances
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
