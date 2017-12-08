import Datastore from 'nedb'
import path from 'path'
import config from '@/config'

const db = new Datastore({
  autoload: true,
  filename: path.join(config.dbFilePath, '/device.db')
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
  }
}
