const based_url = "https://api.pro.coinbase.com/";
const api_key = `client_id=${process.env.REACT_APP_COINBASE_CLIENT_ID}`;
const products = "products";
const currencies = "currencies/";
export const historicRateURL = (product_id, granularity = 60) =>
  `${based_url}${products}/${product_id}/candles?granularity=${granularity}&${api_key}`;
export const currenciesURL = () => `${based_url}${currencies}?${api_key}`;
export const getCurrencyURL = (product_id) =>
  `${based_url}${currencies}/${product_id}?${api_key}`;
