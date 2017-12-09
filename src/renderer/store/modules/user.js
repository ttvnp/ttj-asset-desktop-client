import userDB from '@/database/user'
import defaultProfileImage from '@/assets/user_default_profile.png'

const state = {
  user: null
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
    commit('setUser', userDB)
  }
}

const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
