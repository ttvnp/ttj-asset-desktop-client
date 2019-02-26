import path from 'path'
import { remote } from 'electron'

let AppConfig = {}

const commonConfig = {
  assets: [
    { name: 'SNC' },
    { name: 'SNP' }
  ],
  dbFilePath: path.join(remote.app.getPath('userData'), '/ttj-desktop-client-database'),
  recaptchaApiSiteKey: '6LdtkT4UAAAAAECfIeqlHPNMRuUtz02gjopKBxqG'
}

const debugConfig = {
  api: {
    url: 'https://api-testnet.sencoin.com', // http://localhost:1324,
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
                '-----END PUBLIC KEY-----',
  livenet: false,
  issuerAccountID: 'GDNIKJNWHONPWZ2C4EAUKNO3BPGLT3AR6SOQRFMN57UZYEKC4CQXXXS3',
  sencoinAddress: 'GCDRXAESBAQIACAPRLUU46LYYONNDRLXZ6RF6YPCQ7BLJ7EJOIEUWD5Z',
  sencoinexAddress: 'GD3FVZAS2QLSKIR3XXZPZCP3CVTFE2VTKKR5PZLH3TUKTXGBHN3XJZSB'
}

const releaseConfig = {
  api: {
    url: 'https://api.sencoin.com',
    rootPath: 'api',
    version: 'v1'
  },
  serverPubKey: '-----BEGIN PUBLIC KEY-----\n' +
                'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2RHR14zkJbNTloI1YD9c\n' +
                'xqRFdmK2h5dw84fD+21Q1GYzlX+BltmsGWrn+rRmwqzuCMJiaObc+93vkXM9pUPU\n' +
                '1kuwnrhBRCD+zHFU9TYnOmL1TaD9fEp/leH1kHmbzO/HuP9KsSq8k6cjsUGSub3L\n' +
                'Jz890flOhBsArfmzOJx9O6AWgfZp5JKU8ylqztdSGqGZBg8JQjNtqcNYeI1sOUWh\n' +
                'pIa//W7L0s0BfbilxtsF/+H77FSw1g9kvwi/7Ulx9VPLmh+NQ00a4sZ36IDhSm5V\n' +
                'fcZT000CdrEd+I77HRgW1ADQeRUaxtEYf1YDRR8E5hrYs1EbZmUyvAOa6P7NwwME\n' +
                'KwIDAQAB\n' +
                '-----END PUBLIC KEY-----',
  livenet: true,
  issuerAccountID: 'GDPOR42X2YKWL74CCOLTZKWP4RZYYPN3JBYBJF4QVXHVVRQQNPX34O67',
  sencoinAddress: 'GBMD3M5S5XE7MCSFHME5AFRGB6NEYGNTDPHNCYIZOL7KK5CQRI3SYG6R',
  sencoinexAddress: 'GAJIPAQB5IWHL7RB5SPRUZNL2U653GCM6SZ77IQ36RYSP3CTVY3LHOJB'
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
