import path from 'path'
import { remote } from 'electron'

let AppConfig = {}

const debugConfig = {
  api: {
    url: 'http://localhost:1324',
    rootPath: 'api',
    version: 'v1'
  },
  assets: {
    SNC: { name: 'SNC' },
    SNP: { name: 'SNP' }
  },
  dbFilePath: path.join(remote.app.getPath('userData'), '/ttj-desktop-client-database')
}

const releaseConfig = {
  api: {
    url: 'http://testnet.vnjcoin.com',
    rootPath: 'api',
    version: 'v1'
  },
  assets: {
    SNC: { name: 'SNC' },
    SNP: { name: 'SNP' }
  },
  dbFilePath: path.join(remote.app.getPath('userData'), '/ttj-desktop-client-database')
}

if (process.env.NODE_ENV !== 'development') {
  AppConfig = releaseConfig
} else {
  AppConfig = debugConfig
}

export default AppConfig
