import axios from 'axios'

export default {
  noAuth: function () {
    return axios.create()
  },
  withAuth: function (accessToken) {
    const withAuth = axios.create()
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
    axios.defaults.headers.common['Accept'] = 'application/json'
    withAuth.get = function (url) {
      if (url.indexOf('?') >= 0) {
        url += '&'
      } else {
        url += '?'
      }
      url += 'rnd=' + Date.now()
      return axios.get(url)
    }
    return withAuth
  }
}
