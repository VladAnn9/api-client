import { applyMixins } from './utils'
import { Base } from './base'
import { CryptoPrice } from './pricing'

class ApiClient extends Base {}
interface ApiClient extends CryptoPrice {}
applyMixins(ApiClient, [CryptoPrice])

export default ApiClient
