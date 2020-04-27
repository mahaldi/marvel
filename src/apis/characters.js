import api from './index'

class CharactersAPI {
	constructor(){
		this.api = api
	}

	getCharacters({nameStartsWith = null, orderBy = null , limit = 20, offset = 0}) {
		return this.api.get('/characters',{
			params : {
				nameStartsWith,
				orderBy,
				limit,
				offset
			}
		})
	}

	getCharacterDetail(id){
		return this.api.get(`/characters/${id}`)
	}

	getComicsByCharacter(characterId) {
		return this.api.get(`/characters/${characterId}/comics`)
	}

	getSeriesByCharacter(characterId) {
		return this.api.get(`/characters/${characterId}/series`)
	}
}

const charactersApi = new CharactersAPI()
export default charactersApi
