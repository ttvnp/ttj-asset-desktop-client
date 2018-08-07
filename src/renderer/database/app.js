import Datastore from 'nedb'
import path from 'path'
import config from '@/config'

const db = new Datastore({
  autoload: true,
  filename: path.join(config.dbFilePath, '/app.db')
})

export default {
  getApp () {
    return new Promise(function (resolve, reject) {
      db.findOne({}, function (err, app) {
        if (err) {
          reject(err)
        } else {
          resolve(app)
        }
      })
    })
  },
  refresh (app) {
    return new Promise(function (resolve, reject) {
      db.remove({}, { multi: true }, function (err, numRemoved) {
        if (err) {
          reject(err)
        } else {
          db.insert(app, function (err, newApp) {
            if (err) {
              reject(err)
            } else {
              resolve(newApp)
            }
          })
        }
      })
    })
  },
  remove () {
    return new Promise(function (resolve, reject) {
      db.remove({ }, { multi: true })
    })
  }
}
