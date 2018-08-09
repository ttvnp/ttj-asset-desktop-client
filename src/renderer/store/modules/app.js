import appDB from '@/database/app'

const state = {
  settings: {
    showDrawer: false
  },
  loading: false,
  app: {
    loadBalances: false,
    loadPaymentHistory: false
  }
}

const getters = {
  settings: state => state.settings,
  loading: state => state.loading,
  loadBalances: state => state.app.loadBalances,
  loadPaymentHistory: state => state.app.loadPaymentHistory
}

const actions = {
  init ({ commit, state }) {
    if (state.app === null) {
      appDB.getApp().then(function (app) {
        if (app !== null) commit('setApp', app)
      }).catch(function (error) {
        throw error
      })
    }
  },
  setBalancesLoaded ({ commit, state }) {
    const newApp = {
      loadBalances: true,
      loadPaymentHistory: state.app.loadPaymentHistory
    }
    appDB.refresh(newApp)
    commit('setApp', newApp)
  },
  setPaymentHistoryLoaded ({ commit, state }) {
    const newApp = {
      loadBalances: state.app.loadBalances,
      loadPaymentHistory: true
    }
    appDB.refresh(newApp)
    commit('setApp', newApp)
  },
  setShowDrawer ({ commit, state }, value) {
    commit('setShowDrawer', value)
  },
  setLoading ({ commit, state }, value) {
    commit('setLoading', value)
  },
  setApp ({ commit, state }, app) {
    commit('setApp', app)
  }
}

const mutations = {
  setShowDrawer (state, value) {
    state.settings.showDrawer = value
  },
  setLoading (state, value) {
    state.loading = value
  },
  setApp (state, app) {
    state.app = app
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
