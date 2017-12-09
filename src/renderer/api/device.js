import util from './util'
import client from './client'

export default {
  register ({ deviceCode, credential, recaptchaToken }) {
    const url = util.getApiRoot() + '/devices'
    let formData = new FormData()
    formData.append('deviceCode', deviceCode)
    console.log(credential)
    credential = util.encrypt(credential)
    console.log(credential)
    formData.append('credential', credential)
    formData.append('recaptchaToken', recaptchaToken)
    return util.call(function () {
      return client.noAuth().post(url, formData)
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
    formData.append('credential', credential)
    return util.call(function () {
      return client.noAuth().post(url, formData)
    })
  }
}
