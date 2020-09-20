import fetch from 'isomorphic-unfetch'

interface Config {
  apiKey: string
  basePath?: string
}

export abstract class Base {
  private apiKey: string
  private basePath: string

  constructor(config: Config) {
    this.apiKey = config.apiKey
    this.basePath =
      config.basePath || 'https://pro-api.coinmarketcap.com/v1/cryptocurrency'
  }

  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = this.basePath + endpoint
    const headers = {
      'X-CMC_PRO_API_KEY': this.apiKey,
      Accept: 'application/json',
      'Accept-Encoding': 'deflate, gzip'
    }

    const config = {
      ...options,
      headers
    }

    return fetch(url, config).then((r) => {
      if (r.ok) {
        return r.json()
      }

      throw new Error(r.statusText)
    })
  }
}
