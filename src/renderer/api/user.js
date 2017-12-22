import util from './util'
import client from './client'

export default {
  get () {
    const url = util.getApiRoot() + '/users'
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).get(url)
    })
  },
  update ({ profileImageFile, firstName, middleName, lastName, address }) {
    const url = util.getApiRoot() + '/users'
    let formData = new FormData()
    formData.append('profileImageFile', profileImageFile)
    formData.append('firstName', firstName)
    formData.append('middleName', middleName)
    formData.append('lastName', lastName)
    formData.append('address', address)
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    return util.retryOnAuthError(function (accessToken) {
      return client.withAuth(accessToken).patch(url, formData, config)
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
