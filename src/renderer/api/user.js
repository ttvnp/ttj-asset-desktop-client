import util from './util'
import client from './client'

export default {
  get () {
    const url = util.getApiRoot() + '/users'
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).get(url)
    })
  },
  getStrAccount () {
    const url = util.getApiRoot() + '/users/str_receive_account'
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).get(url)
    })
  },
  update ({ profileImageFile, firstName, middleName, lastName, address, genderType, dateOfBirth, cellphoneNumberNationalCode, cellphoneNumber }) {
    const url = util.getApiRoot() + '/users'
    let formData = new FormData()
    formData.append('profileImageFile', profileImageFile)
    formData.append('firstName', firstName)
    formData.append('middleName', middleName)
    formData.append('lastName', lastName)
    formData.append('address', address)
    formData.append('genderType', genderType)
    formData.append('dateOfBirth', dateOfBirth)
    formData.append('cellphoneNumberNationalCode', cellphoneNumberNationalCode)
    formData.append('cellphoneNumber', cellphoneNumber)
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).patch(url, formData, config)
    })
  },
  updateIdDocument ({ idDocument1, idDocument2 }) {
    const url = util.getApiRoot() + '/users/id_document'
    let formData = new FormData()
    formData.append('idDocument1', idDocument1)
    formData.append('idDocument2', idDocument2)
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).post(url, formData, config)
    })
  },
  getTargetUser ({ emailAddress }) {
    const url = util.getApiRoot() + '/users/targets?emailAddress=' + emailAddress
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).get(url)
    })
  },
  getBalances () {
    const url = util.getApiRoot() + '/users/balances'
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).get(url)
    })
  },
  getTransactions ({ pageNum }) {
    let url = util.getApiRoot() + '/users/transactions'
    if (pageNum && pageNum > 0) {
      url += '?page=' + pageNum
    }
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).get(url)
    })
  },
  createTransaction ({ emailAddress, assetType, amount, password }) {
    const url = util.getApiRoot() + '/users/transactions'
    let formData = new FormData()
    formData.append('emailAddress', emailAddress)
    formData.append('assetType', assetType)
    formData.append('amount', amount)
    formData.append('password', password)
    return util.retryOnAuthError(function (accessToken, credential) {
      const cli = client.withAuth(accessToken)
      if (credential) {
        cli.defaults.headers.common['credential'] = util.encrypt(credential)
      }
      return cli.post(url, formData)
    })
  },
  createExternalTransaction ({ strAccountId, strMemoText, assetType, amount, password }) {
    const url = util.getApiRoot() + '/users/transactions_external'
    let formData = new FormData()
    formData.append('strAccountID', strAccountId)
    formData.append('strMemoText', strMemoText)
    formData.append('assetType', assetType)
    formData.append('amount', amount)
    formData.append('password', password)
    return util.retryOnAuthError(function (accessToken, credential) {
      const cli = client.withAuth(accessToken)
      if (credential) {
        cli.defaults.headers.common['credential'] = util.encrypt(credential)
      }
      return cli.post(url, formData)
    })
  },
  changePassword ({ oldPassword, newPassword, retypePassword }) {
    const url = util.getApiRoot() + '/users/password_on_import'
    let formData = new FormData()
    formData.append('current_password', oldPassword)
    formData.append('new_password', newPassword)
    formData.append('new_password2', retypePassword)
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).patch(url, formData)
    })
  },
  updateNotificationSettings ({ grantEmailNotification }) {
    const url = util.getApiRoot() + '/users/notification_settings'
    let formData = new FormData()
    formData.append('grantEmailNotification', grantEmailNotification)
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).patch(url, formData)
    })
  },
  updateSecuritySettings ({ requirePasswordOnSend }) {
    const url = util.getApiRoot() + '/users/security_settings'
    let formData = new FormData()
    formData.append('requirePasswordOnSend', requirePasswordOnSend)
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).patch(url, formData)
    })
  }
}
