
export enum CurrencyEnum {
  USD = 'USD',
  EUR = 'EUR',
  JPY = 'JPY'
}

export type Params = {
  fsyms?: string | string[]
  tsyms?: CurrencyEnum | string
}

export interface CryptoPriceModel {
  [key: string]: {
    [key: string]: number
  }
}
