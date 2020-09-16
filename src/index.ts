import { applyMixins } from './utils'
import { Base } from './base'
import { Listings } from './listings'
import { Metadata } from './metadata'

class ApiClient extends Base {}
interface ApiClient extends Listings, Metadata {}
applyMixins(ApiClient, [Listings, Metadata])

export default ApiClient
