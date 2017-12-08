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
  }
}
