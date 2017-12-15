import Datastore from 'nedb'
import path from 'path'
import config from '@/config'

const db = new Datastore({
  autoload: true,
  filename: path.join(config.dbFilePath, '/user_transaction.db')
})

const cntDB = new Datastore({
  autoload: true,
  filename: path.join(config.dbFilePath, '/user_transaction_cnt.db')
})

export default {
  getTransactions (page, pageSize) {
    let offset = (page - 1) * pageSize
    if (offset < 0) offset = 0
    const self = this
    return new Promise(function (resolve, reject) {
      self.getTotalCnt().then(function (totalCnt) {
        db.count({}, function (err, count) {
          if (err) {
            reject(err)
          } else {
            db.find({}).sort({ id: -1 }).skip(offset).limit(pageSize).exec(function (err, userTransactions) {
              if (err) {
                reject(err)
              } else {
                if (totalCnt !== count) {
                  reject(new Error('transaction data is not loaded completely.'))
                } else {
                  resolve({
                    userTransactions: userTransactions,
                    totalCnt: count
                  })
                }
              }
            })
          }
        })
      })
    })
  },
  upsert (userTransactions) {
    if (!Array.isArray(userTransactions)) {
      userTransactions = [ userTransactions ]
    }
    return new Promise(function (resolve, reject) {
      let upserted = 0
      let errors = []
      for (let i = 0; i < userTransactions.length; i++) {
        const ut = userTransactions[i]
        db.update({ id: ut.id }, ut, { upsert: true }, function (err, numReplaced, upsert) {
          upserted++
          if (err) {
            errors.push(err)
          }
          if (upserted >= userTransactions.length) {
            if (errors.length > 0) {
              reject(errors)
            } else {
              resolve(userTransactions)
            }
          }
        })
      }
    })
  },
  getTotalCnt () {
    return new Promise(function (resolve, reject) {
      cntDB.findOne({}, function (err, cntDoc) {
        if (err) {
          reject(err)
        } else {
          resolve(cntDoc ? cntDoc.totalCnt : 0)
        }
      })
    })
  },
  updateTotalCnt (cnt) {
    return new Promise(function (resolve, reject) {
      cntDB.remove({}, { multi: true }, function (err, numRemoved) {
        if (err) {
          reject(err)
        } else {
          cntDB.insert({ totalCnt: cnt }, function (err, cntDoc) {
            if (err) {
              reject(err)
            } else {
              resolve(cntDoc.totalCnt)
            }
          })
        }
      })
    })
  }
}
