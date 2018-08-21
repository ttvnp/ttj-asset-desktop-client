import deviceDB from '@/database/device'
import appDB from '@/database/app'
import userDB from '@/database/user'
import balanceDB from '@/database/balance'
import userTransactionDB from '@/database/user_transaction'
import deviceApi from '@/api/device'
import util from '@/util'

const state = {
  isActivated: false,
  device: null,
  lang: 'en'
}

const getters = {
  isActivated: state => state.isActivated,
  isDeviceLoaded: state => state.device !== null,
  device: state => state.device,
  lang: state => state.lang
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
              grantPushNotification: data.grantPushNotification
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
        grantPushNotification: data.grantPushNotification
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
        emailAddress: data.user.emailAddress,
        profileImageID: data.user.profileImageID,
        profileImageURL: data.user.profileImageURL,
        firstName: data.user.firstName,
        middleName: data.user.middleName,
        lastName: data.user.lastName,
        address: data.user.address,
        isIdentified: data.user.isIdentified,
        isEmailVerified: data.user.isEmailVerified
      }
      const device = {
        deviceCode: state.device.deviceCode,
        credential: state.device.credential,
        accessToken: data.device.accessToken,
        accessTokenExpiry: data.device.accessTokenExpiry,
        isActivated: data.device.isActivated,
        deviceToken: data.device.deviceToken,
        grantPushNotification: data.device.grantPushNotification
      }
      commit('setDevice', device)
      deviceDB.refresh(device)
      onSuccess(user)
    }).catch(function (error) {
      onError(null, null, error)
    })
  },
  updateNotificationSettings ({ commit, state }, { grantPushNotification, onSuccess, onError }) {
    deviceApi.updateNotificationSettings({ grantPushNotification }).then(function (data) {
      if (data.exitCode !== 0) {
        onError(data.code, data.message)
        return
      }
      const device = {
        deviceCode: state.device.deviceCode,
        credential: state.device.credential,
        accessToken: data.accessToken,
        accessTokenExpiry: data.accessTokenExpiry,
        isActivated: data.isActivated,
        deviceToken: data.deviceToken,
        grantPushNotification: data.grantPushNotification
      }
      commit('setDevice', device)
      deviceDB.refresh(device)
      onSuccess()
    }).catch(function (error) {
      onError(null, null, error)
    })
  },
  getLanguage ({ commit, state }, { callback }) {
    deviceDB.getLanguageState().then(function (language) {
      let lang = state.lang
      if (language === null) {
        callback(lang)
        return
      }
      commit('setLanguage', language.lang)
      callback(language.lang)
    })
  },
  changeLanguage ({ commit, state }, { language }) {
    deviceDB.setLanguageState(language)
    commit('setLanguage', language)
  },
  logout ({ commit, state }, { onSuccess, onError }) {
    deviceApi.logout().then(function (data) {
      deviceDB.remove()
      deviceDB.removeLanguageDB()
      appDB.remove()
      userDB.remove()
      balanceDB.remove()
      userTransactionDB.remove()
      userTransactionDB.removeCntDB()
      state.isActivated = false
      state.device = null
      onSuccess()
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
  setLanguage (state, language) {
    state.lang = language
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
