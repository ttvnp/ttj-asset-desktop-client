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
  init ({ commit, state }, { callback }) {
    if (state.device !== null) {
      callback(state.isActivated)
    } else {
      deviceDB.getDevice().then(function (device) {
        let isDeviceActivated = false
        if (device === null) {
          callback(isDeviceActivated)
          return
        }
        commit('setDevice', device)
        if (device.isActivated === true) {
          callback(device.isActivated)
        } else {
          deviceApi.get().then(function (data) {
            if (data.exitCode !== 0) {
              callback(isDeviceActivated)
              return
            }
            const newDevice = {
              deviceCode: device.deviceCode,
              credential: device.credential,
              accessToken: data.accessToken,
              accessTokenExpiry: data.accessTokenExpiry,
              isActivated: data.isActivated,
              deviceToken: data.deviceToken,
              grantPushNotification: data.grantPushNotification,
              grantEmailNotification: data.grantEmailNotification
            }
            deviceDB.refresh(newDevice)
            commit('setDevice', newDevice)
            isDeviceActivated = newDevice.isActivated
            callback(isDeviceActivated)
          }).catch(function (error) {
            throw error
          })
        }
      }).catch(function (error) {
        throw error
      })
    }
  },
  register ({ commit, state }, { recaptchaToken, onSuccess, onError }) {
    if (state.device !== null) {
      onSuccess()
      return
    }
    const deviceCode = util.generateToken68(128)
    const credential = util.generateToken68(128)
    deviceApi.register({
      deviceCode,
      credential,
      recaptchaToken
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
  registerEmail ({ commit, state }, { emailAddress, onSuccess, onError }) {
    deviceApi.registerEmail({ emailAddress }).then(function (data) {
      if (data.exitCode !== 0) {
        onError(data.code, data.message, null)
        return
      }
      onSuccess(data.isEmailInUse)
    }).catch(function (error) {
      onError(null, null, error)
    })
  },
  verifyEmail ({ commit, state }, { verificationCode, passwordOnImport, onSuccess, onError }) {
    deviceApi.verifyEmail({ verificationCode, passwordOnImport }).then(function (data) {
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
