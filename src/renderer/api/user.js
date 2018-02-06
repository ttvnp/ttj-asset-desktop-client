import util from './util'
import client from './client'

export default {
  get () {
    const url = util.getApiRoot() + '/users'
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
  updateIdDocument ({ faceImageFile, addressImageFile }) {
    const url = util.getApiRoot() + '/users/id_document'
    let formData = new FormData()
    console.log(faceImageFile)
    formData.append('faceImageFile', faceImageFile)
    formData.append('addressImageFile', addressImageFile)
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
  createTransaction ({ emailAddress, assetType, amount }) {
    const url = util.getApiRoot() + '/users/transactions'
    let formData = new FormData()
    formData.append('emailAddress', emailAddress)
    formData.append('assetType', assetType)
    formData.append('amount', amount)
    return util.retryOnAuthError(function (accessToken, credential) {
      const cli = client.withAuth(accessToken)
      if (credential) {
        cli.defaults.headers.common['credential'] = util.encrypt(credential)
      }
      return cli.post(url, formData)
    })
  }
}
