const querystring = require("querystring");
import { Base } from '../base'
import { MetadataModel } from './models'

const endpoint = '/info'

export class Metadata extends Base {
  getCryptoMetadata(id: number) {
    return this.request<MetadataModel>(`${endpoint}?id=${id}`)
  }
}
