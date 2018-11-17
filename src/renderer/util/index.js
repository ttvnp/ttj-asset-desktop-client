import StellarSdk from 'stellar-sdk'
import bigInt from 'big-integer'

const removeDecimal = function (numStr) {
  if (!numStr) {
    return 0
  }
  let result = ''
  for (let i = 0; i < numStr.length; i++) {
    let c = numStr[i]
    if (c === '.') continue
    result += c
  }
  return result
}

export default {
  isValidEmailAddress (emailAddress) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)
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
  isValidStellarAccountID (publicKey) {
    return StellarSdk.StrKey.isValidEd25519PublicKey(publicKey)
  },
  loadTrustLimit (publicKey, isLivenet, issuerAccountID, assetType) {
    let server = null
    if (isLivenet) {
      StellarSdk.Network.usePublicNetwork()
      server = new StellarSdk.Server('https://horizon.stellar.org')
    } else {
      StellarSdk.Network.useTestNetwork()
      server = new StellarSdk.Server('https://horizon-testnet.stellar.org')
    }
    return new Promise(function (resolve, reject) {
      server.loadAccount(publicKey).then(function (account) {
        let target = null
        for (let i = 0; i < account.balances.length; i++) {
          const balance = account.balances[i]
          if (balance.asset_issuer === issuerAccountID && balance.asset_code === assetType) {
            target = balance
            break
          }
        }
        resolve(target ? removeDecimal(target.limit) : '0')
      }).catch(function (error) {
        reject(error)
      })
    })
  },
  compareNumber (a, b) {
    let left = bigInt(a)
    let right = bigInt(b)
    return left.compare(right)
  }
}
