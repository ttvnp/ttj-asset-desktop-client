import Datastore from 'nedb'
import path from 'path'
import config from '@/config'

const db = new Datastore({
  autoload: true,
  filename: path.join(config.dbFilePath, '/balance.db')
})

export default {
  getBalances () {
    return new Promise(function (resolve, reject) {
      db.find({}, function (err, balances) {
        if (err) {
          reject(err)
        } else {
          resolve(balances)
        }
      })
    })
  },
  refresh (balances) {
    return new Promise(function (resolve, reject) {
      db.remove({}, { multi: true }, function (err, numRemoved) {
        if (err) {
          reject(err)
        } else {
          db.insert(balances, function (err, newBalances) {
            if (err) {
              reject(err)
            } else {
              resolve(newBalances)
            }
          })
        }
      })
    })
  }
}
