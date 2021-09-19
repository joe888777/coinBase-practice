const based_url = "https://api.pro.coinbase.com/";
const api_key = process.env.COINBASE_CLIENT_ID;
//   "client_id=9f88edbd33fb87670ff519bca13d460c86ad72bbc2a4b4d9557145370f16d8de";
const products = "products";
const currencies = "currencies/";
export const historicRateURL = (product_id, granularity = 60) =>
  `${based_url}${products}/${product_id}/candles?granularity=${granularity}&${api_key}`;
export const currenciesURL = () => `${based_url}${currencies}?${api_key}`;
export const getCurrencyURL = (product_id) =>
  `${based_url}${currencies}/${product_id}?${api_key}`;
