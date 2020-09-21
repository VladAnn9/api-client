const nock = require('nock')
const ApiClient = require('../../dist')

describe('Test Crypto API resources', () => {
  test('getCryptoList returns list of cryptoes', async () => {
    const scope = nock('https://min-api.cryptocompare.com/data')
      .get('/pricemulti')
      .query({ extraParams: 'vue_crypto_app', tsyms: 'USD,EUR,JPY', fsyms: 'BTC' })
      .reply(200, {
        BTC: {
          USD: 10619.35,
          EUR: 9034.5,
          JPY: 450
        }
      })

    const api = new ApiClient({ apiKey: 'XYZ' })
    await api.getCryptoPrices({fsyms: 'BTC'})

    scope.done()
  })
})
