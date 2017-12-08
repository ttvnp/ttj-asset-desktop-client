import deviceDB from '@/database/device'
import deviceApi from '@/api/device'
import util from '@/util'

const state = {
  isActivated: false,
  device: null
}

const getters = {
  isActivated: state => state.isActivated,
  isDeviceLoaded: state => state.device !== null
}

const actions = {
  init ({ commit, state }, cb) {
    if (state.device !== null) {
      cb(state.isActivated)
    } else {
      deviceDB.getDevice().then(function (device) {
        if (device && device.isActivated === true) {
          commit('setDevice', device)
        }
        cb(state.isActivated)
      }).catch(function (error) {
        throw error
      })
    }
  },
  register ({ commit, state }, { emailAddress, password, onSuccess, onError }) {
    const deviceCode = util.generateToken68(128)
    const credential = util.generateToken68(128)
    deviceApi.register({
      deviceCode,
      credential,
      emailAddress,
      password
    }).then(function (data) {
      if (data.exitCode !== 0) {
        onError(data.code, data.message, null)
        return
      }
      const device = {
        deviceCode: deviceCode,
        credential: credential,
        accessToken: data.accessToken,
        accessTokenExpiry: data.accessTokenExpiry,
        isActivated: data.isActivated,
        deviceToken: data.deviceToken,
        grantPushNotification: data.grantPushNotification,
        grantEmailNotification: data.grantEmailNotification
      }
      deviceDB.refresh(device)
      commit('setDevice', device)
      onSuccess()
    }).catch(function (error) {
      onError(null, null, error)
    })
  },
  vefiry ({ commit, state }, { verificationCode, onSuccess, onError }) {
    deviceApi.verifyCode({ verificationCode }).then(function (data) {
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
      const device = state.device
      commit('setIsActivated', user.isEmailVerified)
      deviceDB.refresh(device)
      onSuccess(user)
    }).catch(function (error) {
      onError(null, null, error)
    })
  }
}

const mutations = {
  setDevice (state, device) {
    state.device = device
    state.isActivated = device.isActivated
  },
  setIsActivated (state, isActivated) {
    state.device.isActivated = isActivated
    state.isActivated = isActivated
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
