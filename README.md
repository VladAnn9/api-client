
<h1 align="center">
api-crypto-client
</h1>
<p align="center">
Flexible and small client for interaction with crypto API written in Typescript.
</p>

## 🔧 Install

```sh
$ npm install @vladann9/api-crypto-client
```

## 🌐 Usage

Import `@vladann9/api-crypto-client` module in your project and initialize it with your [apiKey](https://min-api.cryptocompare.com/).

```js
import ApiClient from '@vladann9/api-crypto-client'

const CryptoClient = new ApiClient({ apiKey: '%apiKey%' })

CryptoClient.getCryptoPrices({ fsyms: '%YOUR_CRYPTO,,%'}).then((data) => {
    console.log(data)
})
```

## License

[MIT](LICENSE)
