# CoinBase data practice - to lookup history Rate of Crypto Coin 加密貨幣查詢網-串以 CoinBase 提供之 api 資料

## Demo

Version 1.0: [Click me](https://eloquent-pasteur-bf2205.netlify.app/)

## What you can do

- look up which crypto coin you want to know it's information and history rate
- to add your favorite coin to favorite,using localstorage
- to search for the coin you want to know
- sign in with google
- 查詢加密貨幣的資訊，以及歷史漲跌紀錄
- 將喜歡的加密貨幣加入我的最愛
- 利用搜尋功能找尋該加密貨幣
- 實現 google 登入

### Related technique

- React.js 17.0
- styled-components
- framer-motion
- react-google-login
- react-router-dom
- axios
- redux
- redux-thunk
  -localstorage to save favorite

### CoinBase API

- [coinbase API](https://docs.pro.coinbase.com/)

### Google Login

- [google login](https://www.npmjs.com/package/react-google-login)
- [remember to get google Client_id ](https://console.cloud.google.com/apis/)

### Ajax

- axios

## How to run

1. install related dev tools

```
yarn install
```

remember to set .env,there are two envirenment variables <font color='blue'>React_APP_COINBASE_CLIENT_ID</font>and <font color='blue'>React_APP_GOOGLE_CLIENT_ID</font>
you should get both [CoinBase API key](https://docs.pro.coinbase.com/) and [Google Console API key](https://console.cloud.google.com/apis/).

記得先設定 .env,裡面有兩個環境變數<font color='blue'>React_APP_COINBASE_CLIENT_ID</font>and <font color='blue'>React_APP_GOOGLE_CLIENT_ID</font>必須先到 coinbase 以及 Google Console 拿到對應的 api key。

2. run on local

```
yarn start
```

3. Go to http://localhost:3000
