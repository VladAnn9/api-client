
<h1 align="center">
api-crypto-client
</h1>
<p align="center">
Flexible and small client for interaction with crypto API written in Typescript.
</p>

## 🔧 Install

```sh
$ npm install api-crypto-client
```

## 🌐 Usage

Import `api-crypto-client` module in your project and initialize it with your [apiKey](https://pro.coinmarketcap.com).

```js
import ApiClient from 'api-crypto-client'

const CryptoClient = new ApiClient({ apiKey: '%apiKey%' })

CryptoClient.getCryptoList().then((data) => {
    console.log(data)
})

CryptoClient.getCryptoMetadata(id).then((data) => {
    console.log(data)
})
```

## License

[MIT](LICENSE)
