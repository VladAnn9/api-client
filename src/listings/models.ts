import { Status } from '../models'

export enum SortEnum {
  market_cap = 'market_cap',
  name = 'name',
  price = 'price',
  volume_7d = 'volume_7d',
  volume_30d = 'volume_30d'
}

export type Params = {
  limit?: number
  sort?: SortEnum
}

export interface ListingsModel {
  data: [
    {
      id: number
      name: string
      symbol: string
      slug: string
      cmc_rank: number
      num_market_pairs: number
      circulating_supply: number
      total_supply: number
      max_supply: number
      last_updated: string
      date_added: string
      tags: string[]
      platform: any
      quote: {
        [key: string]: {
          price: number
          volume_24h: number
          percent_change_1h: number
          percent_change_24h: number
          percent_change_7d: number
          market_cap: number
          last_updated: string
        }
      }
    }
  ]
  status: Status
}
