import path from 'path'
import { remote } from 'electron'

let AppConfig = {}

const commonConfig = {
  assets: {
    SNC: { name: 'SNC' },
    SNP: { name: 'SNP' }
  },
  dbFilePath: path.join(remote.app.getPath('userData'), '/ttj-desktop-client-database'),
  recaptchaApiSiteKey: '6LeXSDwUAAAAANKknJNfFqYSeffUl3UnCj-d5vAT'
}

const debugConfig = {
  api: {
    url: 'http://localhost:1324',
    rootPath: 'api',
    version: 'v1'
  },
  serverPubKey: '-----BEGIN PUBLIC KEY-----\n' +
                'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAo/PSAOtoTNJZvBQEZj6Y\n' +
                'CGMMrUTCoJGl1A5G3peDX6RxL6Bv8/A6jLvgEvbmpiVQOoAjq4IqIWJHi1YjLeTn\n' +
                'nIEBmBlKzKkv8zAh11LlDuMEW9QLW5MCCwxClJaG6kTjn5uzc5bDq+3xIPmiunpz\n' +
                'A52lJPZD8q8m9NYFotFEy0GoGyrwMucvwEzKw2kxW72ZymKU+DRaejc8oD8BTLL+\n' +
                'nsc9EXajZrVqcpb2gCx0tIzfCA+HlQq0abSuVchpEVWmA2Gt2Veej2RcEk/jJqUy\n' +
                'y3qbFBUTA/r5jOPX8E0aWQHAkjIreoxa5jmrWEFPeKySD3uPDy7vM35qNNTFR4QN\n' +
                'BQIDAQAB\n' +
                '-----END PUBLIC KEY-----'
}

const releaseConfig = {
  api: {
    url: 'http://testnet.vnjcoin.com',
    rootPath: 'api',
    version: 'v1'
  },
  serverPubKey: '-----BEGIN PUBLIC KEY-----\n' +
                'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAo/PSAOtoTNJZvBQEZj6Y\n' +
                'CGMMrUTCoJGl1A5G3peDX6RxL6Bv8/A6jLvgEvbmpiVQOoAjq4IqIWJHi1YjLeTn\n' +
                'nIEBmBlKzKkv8zAh11LlDuMEW9QLW5MCCwxClJaG6kTjn5uzc5bDq+3xIPmiunpz\n' +
                'A52lJPZD8q8m9NYFotFEy0GoGyrwMucvwEzKw2kxW72ZymKU+DRaejc8oD8BTLL+\n' +
                'nsc9EXajZrVqcpb2gCx0tIzfCA+HlQq0abSuVchpEVWmA2Gt2Veej2RcEk/jJqUy\n' +
                'y3qbFBUTA/r5jOPX8E0aWQHAkjIreoxa5jmrWEFPeKySD3uPDy7vM35qNNTFR4QN\n' +
                'BQIDAQAB\n' +
                '-----END PUBLIC KEY-----'
}

const jsonConcat = function (o1, o2) {
  for (const key in o2) {
    o1[key] = o2[key]
  }
  return o1
}

if (process.env.NODE_ENV !== 'development') {
  AppConfig = jsonConcat(commonConfig, releaseConfig)
} else {
  AppConfig = jsonConcat(commonConfig, debugConfig)
}

export default AppConfig
