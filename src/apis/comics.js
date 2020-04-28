import api from './index'

class ComicsAPI {
	constructor(){
		this.api = api
	}

	getComics({titleStartsWith = null, limit = 20, offset = 0}) {
		return this.api.get('/comics',{
			params : {
				titleStartsWith,
				limit,
				offset
			}
		})
	}

	getCharactersByComicId(id) {
		return this.api.get(`/comics/${id}/characters`)
	}

	getComicDetail(id) {
		return this.api.get(`/comics/${id}`)
	}
}

const comicsApi = new ComicsAPI()
export default comicsApi
