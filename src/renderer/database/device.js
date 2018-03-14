import Datastore from 'nedb'
import path from 'path'
import config from '@/config'

const db = new Datastore({
  autoload: true,
  filename: path.join(config.dbFilePath, '/device.db')
})

const dbLanguage = new Datastore({
  autoload: true,
  filename: path.join(config.dbFilePath, '/device_language.db')
})

export default {
  getDevice () {
    return new Promise(function (resolve, reject) {
      db.findOne({}, function (err, device) {
        if (err) {
          reject(err)
        } else {
          resolve(device)
        }
      })
    })
  },
  updateAccessToken (accessToken, accessTokenExpiry) {
    return new Promise(function (resolve, reject) {
      db.update({}, { $set: { accessToken: accessToken, accessTokenExpiry: accessTokenExpiry } }, { multi: true }, function (err, items) {
        if (err) {
          reject(err)
        } else {
          resolve(items.length > 0 ? items[0] : null)
        }
      })
    })
  },
  refresh (device) {
    return new Promise(function (resolve, reject) {
      db.remove({}, { multi: true }, function (err, numRemoved) {
        if (err) {
          reject(err)
        } else {
          db.insert(device, function (err, newDevice) {
            if (err) {
              reject(err)
            } else {
              resolve(newDevice)
            }
          })
        }
      })
    })
  },
  getLanguageState () {
    return new Promise(function (resolve, reject) {
      dbLanguage.findOne({}, function (err, language) {
        if (err) {
          reject(err)
        } else {
          resolve(language)
        }
      })
    })
  },
  setLanguageState (language) {
    return new Promise(function (resolve, reject) {
      dbLanguage.remove({}, { multi: true }, function (err, languageRemoved) {
        if (err) {
          reject(err)
        } else {
          dbLanguage.insert(language, function (err, newLanguage) {
            if (err) {
              reject(err)
            } else {
              resolve(newLanguage)
            }
          })
        }
      })
    })
  }
}
