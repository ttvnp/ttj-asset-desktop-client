export default {
  isValidEmailAddress (emailAddress) {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)
  },
  isValidAmountFormat (secret) {
    return /^[1-9][0-9]*$/.test(secret)
  },
  generateToken68 (len) {
    const availables = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~+/'
    const cl = availables.length
    let result = ''
    for (let i = 0; i < len; i++) {
      result += availables[Math.floor(Math.random() * cl)]
    }
    return result
  },
  toDate (str) {
    // support RFC 3339 format only
    return new Date(str)
  },
  toLocaleString (date) {
    return [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    ].join('/') + ' ' + date.toLocaleTimeString()
  },
  getCookie (name) {
    let result = null
    const cookieName = name + '='
    const allcookies = window.document.cookie
    const position = allcookies.indexOf(cookieName)
    if (position !== -1) {
      const startIndex = position + cookieName.length
      let endIndex = allcookies.indexOf(';', startIndex)
      if (endIndex === -1) {
        endIndex = allcookies.length
      }
      result = decodeURIComponent(allcookies.substring(startIndex, endIndex))
    }
    return result
  },
  setCookie (name, value, expiredays) {
    let path = window.location.pathname
    let paths = []
    paths = path.split('/')
    if (paths[paths.length - 1] !== '') {
      paths[paths.length - 1] = ''
      path = paths.join('/')
    }
    const extime = new Date().getTime()
    const cltime = new Date(extime + (60 * 60 * 24 * 1000 * expiredays))
    const exdate = cltime.toUTCString()
    let s = ''
    s += name + '=' + escape(value)
    s += '; path=' + path
    if (expiredays) {
      s += '; expires=' + exdate + '; '
    } else {
      s += '; '
    }
    window.document.cookie = s
  }
}
