const querystring = require("querystring");
import { Base } from '../base'
import { CryptoPriceModel, CurrencyEnum, Params } from './models'
import { ErrorModel } from '../models'


const endpoint = 'pricemulti?extraParams=vue_crypto_app&'

export class CryptoPrice extends Base {
  getCryptoPrices(params: Params = { fsyms: 'BTC,ETH,UNI'}): Promise<CryptoPriceModel | ErrorModel> {
    const tsyms = 'USD,EUR,JPY'
    let query = `${endpoint}tsyms=${tsyms}&`
    query += querystring.stringify(params, '&')
    return this.request<CryptoPriceModel>(query)
  }
}
