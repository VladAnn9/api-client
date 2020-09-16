import { Status } from '../models'

export interface MetadataModel {
  data: {
    [key: string]: {
      urls: {
        website: string[]
        technical_doc: string[]
        twitter: []
        reddit: string[]
        message_board: string[]
        announcement: []
        chat: []
        explorer: string[]
        source_code: string[]
      }
      logo: string
      id: number
      name: string
      symbol: string
      slug: string
      description: string
      date_added: string
      tags: string[]
      platform: any
      category: string
    }
  }
  status: Status
}
