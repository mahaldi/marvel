import axios from 'axios';
const API_BASE_URL = 'https://gateway.marvel.com:443/v1/public'
const PUBLIC_KEY = '8a3c5ccec340c15d41abeb5820b1f53f'

class indexAPI {
	constructor() {
		this.api = axios.create({
			baseURL: API_BASE_URL,
			timeout: 1000 * 60,
			params: {
				apikey: PUBLIC_KEY
			}
		});
	}

	getCharacters(params={}) {
		return this.api.get('/characters',{
			params
		})
	}

	_getCharacters({nameStartsWith = null, orderBy = null , limit = 20, offset = 0}) {
		return this.api.get('/characters',{
			params : {
				nameStartsWith,
				orderBy,
				limit,
				offset
			}
		})
	}
	_getComics({titleStartsWith = null, limit = 20}) {
		return this.api.get('/comics',{
			params : {
				titleStartsWith,
				limit
			}
		})
	}
	_getSeries({titleStartsWith = null, limit = 20}) {
		return this.api.get('/series',{
			params : {
				titleStartsWith,
				limit
			}
		})
	}
	getCharacter(id){
		return this.api.get(`/characters/${id}`)
	}

	getComics(characterId) {
		return this.api.get(`/characters/${characterId}/comics`)
	}

	getSeries(characterId) {
		return this.api.get(`/characters/${characterId}/series`)
	}
}
const IndexAPI = new indexAPI();
export default IndexAPI;
