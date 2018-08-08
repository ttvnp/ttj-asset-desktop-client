import util from './util'
import client from './client'

export default {
  get () {
    const url = util.getApiRoot() + '/devices'
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).get(url)
    })
  },
  register ({ deviceCode, credential, recaptchaToken }) {
    const url = util.getApiRoot() + '/devices'
    let formData = new FormData()
    formData.append('deviceCode', deviceCode)
    credential = util.encrypt(credential)
    formData.append('credential', credential)
    formData.append('recaptchaToken', recaptchaToken)
    return util.call(function () {
      return client.noAuth().post(url, formData)
    })
  },
  registerEmail ({ emailAddress }) {
    const url = util.getApiRoot() + '/devices/email'
    let formData = new FormData()
    formData.append('emailAddress', emailAddress)
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).post(url, formData)
    })
  },
  verifyEmail ({ verificationCode, passwordOnImport }) {
    const url = util.getApiRoot() + '/devices/verify_email'
    let formData = new FormData()
    formData.append('verificationCode', verificationCode)
    formData.append('passwordOnImport', passwordOnImport)
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).post(url, formData)
    })
  },
  issueAccessToken ({ deviceCode, credential }) {
    const url = util.getApiRoot() + '/devices/access_token'
    let formData = new FormData()
    formData.append('deviceCode', deviceCode)
    credential = util.encrypt(credential)
    formData.append('credential', credential)
    return util.call(function () {
      return client.noAuth().post(url, formData)
    })
  },
  updateNotificationSettings ({ grantPushNotification, grantEmailNotification }) {
    const url = util.getApiRoot() + '/devices/notification_settings'
    let formData = new FormData()
    formData.append('grantPushNotification', grantPushNotification)
    formData.append('grantEmailNotification', grantEmailNotification)
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).patch(url, formData)
    })
  },
  logout () {
    const url = util.getApiRoot() + '/devices/logout'
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).post(url)
    })
  }
}
