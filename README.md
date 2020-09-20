
<h1 align="center">
api-client
</h1>
<p align="center">
Flexible and small client for interaction with crypto API written in Typescript.
</p>

## 🔧 Install

```sh
$ npm install api-client
```

## 🌐 Usage

Import `api-client` module in your project and initialize it with your [apiKey](https://pro.coinmarketcap.com).

```js
import ApiClient from 'api-client'

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
