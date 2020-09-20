const querystring = require("querystring");
import { Base } from '../base'
import { ListingsModel, SortEnum, Params } from './models'

const endpoint = '/listings/latest'

export class Listings extends Base {
  getCryptoList(params: Params = { limit: 5, sort: SortEnum.market_cap }) {
    let query = `${endpoint}?`
    query += querystring.stringify(params, '&')
    return this.request<ListingsModel>(query)
  }
}
