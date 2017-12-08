import Datastore from 'nedb'
import path from 'path'
import config from '@/config'

const db = new Datastore({
  autoload: true,
  filename: path.join(config.dbFilePath, '/user.db')
})

export default {
  getUser () {
    return new Promise(function (resolve, reject) {
      db.findOne({}, function (err, user) {
        if (err) {
          reject(err)
        } else {
          resolve(user)
        }
      })
    })
  },
  refresh (user) {
    return new Promise(function (resolve, reject) {
      db.remove({}, { multi: true }, function (err, numRemoved) {
        if (err) {
          reject(err)
        } else {
          db.insert(user, function (err, newUser) {
            if (err) {
              reject(err)
            } else {
              resolve(newUser)
            }
          })
        }
      })
    })
  }
}
