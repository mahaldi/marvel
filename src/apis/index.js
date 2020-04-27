import axios from 'axios';
export const API_BASE_URL = 'https://gateway.marvel.com:443/v1/public'
export const PUBLIC_KEY = '8a3c5ccec340c15d41abeb5820b1f53f'

export default axios.create({
	baseURL: API_BASE_URL,
	timeout: 1000 * 60,
	params: {
		apikey: PUBLIC_KEY
	}
});
