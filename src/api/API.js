import axios from 'axios';
import config from '../config'

export default {
	CoinMarket:axios.create({
		baseURL: 'https://pro-api.coinmarketcap.com/v1/',
		headers: {
			'Content-Type': 'application/json',
			'X-CMC_PRO_API_KEY':config.CoinMarketKey
		}
	})
}