export const CoinList = (currency) =>
  `https://min-api.cryptocompare.com/data/price?fsym=FTM&tsyms=${currency}`;

export const SingleCoin = (id) =>
  `https://min-api.cryptocompare.com/data/price?fsym=${id}&tsyms=USD,JPY,EUR,BTC,ETH,IND`;

export const HistoricalChart = (id, days = 365, currency) =>
`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

// `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${id}&CMC_PRO_API_KEY=${CMP_AUTH_KEY}`  

// export const TrendingCoins = (currency) =>
//   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;