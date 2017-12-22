import appConfig from '@/config'
import deviceApi from './device'
import deviceDB from '@/database/device'
import deviceStore from '@/store/modules/device'
import NodeRSA from 'node-rsa'

const getRand = function () {
  let dt = new Date()
  return dt.getTime()
}

const getApiRoot = function () {
  let ret = appConfig.api.url + '/' + appConfig.api.rootPath
  if (appConfig.api.version) {
    ret = ret + '/' + appConfig.api.version
  }
  return ret
}

const commonErrorHandler = function (error) {
  if (error.message && error.message === 'Network Error') {
    alert('Error occurred due to network error.Please confirm your network works.')
  }
}

const call = function (apiCall) {
  return new Promise(function (resolve, reject) {
    apiCall().then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      commonErrorHandler(error)
      reject(error)
    })
  })
}

let device = null

const retryOnAuthError = function (apiCall) {
  device = deviceStore.state.device
  return new Promise(function (resolve, reject) {
    if (device === null) {
      reject(new Error('device is not activated.'))
      deviceDB.getDevice().then(function (retrieved) {
        device = retrieved
      })
      return
    }
    let accessToken = device.accessToken
    let deviceCode = device.deviceCode
    let credential = device.credential
    apiCall(accessToken, credential).then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      if (error && error.response && error.response.status === 401) {
        deviceApi.issueAccessToken({ deviceCode, credential }).then(function (data) {
          if (data.exitCode !== 0) {
            reject(new Error(data.message))
          } else {
            device.accessToken = data.accessToken
            device.accessTokenExpiry = data.accessTokenExpiry
            deviceDB.updateAccessToken(data.accessToken, data.accessTokenExpiry)
            apiCall(data.accessToken, credential).then(function (response) {
              resolve(response.data)
            }).catch(function (error) {
              commonErrorHandler(error)
              reject(error)
            })
          }
        }).catch(function (error) {
          commonErrorHandler(error)
          reject(error)
        })
      } else {
        commonErrorHandler(error)
        reject(error)
      }
    })
  })
}

const serverPubKey = new NodeRSA(appConfig.serverPubKey, 'pkcs8-public-pem', {
  encryptionScheme: 'pkcs1'
})
const encrypt = function (plainText) {
  return serverPubKey.encrypt(plainText, 'hex', 'utf8')
}

export default {
  getApiRoot: getApiRoot,
  getRand: getRand,
  call: call,
  retryOnAuthError: retryOnAuthError,
  encrypt: encrypt
}
