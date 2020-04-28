import api from './index'

class SeriesAPI {
	constructor(){
		this.api = api
	}
	getSeries({titleStartsWith = null, limit = 20, offset = 0}) {
		return this.api.get('/series',{
			params : {
				titleStartsWith,
				limit,
				offset
			}
		})
	}

	getCharactersBySeriesId(id) {
		return this.api.get(`/series/${id}/characters`)
	}

	getComicsBySeriesId(id) {
		return this.api.get(`/series/${id}/comics`)
	}

	getSeriesDetail(id) {
		return this.api.get(`/series/${id}`)
	}
}

const seriesApi = new SeriesAPI();
export default seriesApi
