const state = {
  settings: {
    showDrawer: false
  },
  loading: false
}

const getters = {
  settings: state => state.settings,
  loading: state => state.loading
}

const actions = {
  setShowDrawer ({ commit, state }, value) {
    commit('setShowDrawer', value)
  },
  setLoading ({ commit, state }, value) {
    commit('setLoading', value)
  }
}

const mutations = {
  setShowDrawer (state, value) {
    state.settings.showDrawer = value
  },
  setLoading (state, value) {
    state.loading = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
