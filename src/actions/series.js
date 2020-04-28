import {
	FETCH_CHARACTERS,
	FETCH_COMICS,
	FETCH_SERIES,
	FETCH_DETAIL,
	FETCH_SERIES_BEGIN,
	FETCH_SERIES_FAILURE
} from './types'

import SeriesAPI from '../apis/series'

export const fetchSeries = ({limit= 20, offset = 20}) => async dispatch => {
	try{
		dispatch({type: FETCH_SERIES_BEGIN})
		const response = await SeriesAPI.getSeries({limit, offset})
		dispatch({
			type: FETCH_SERIES,
			payload: response.data.data.results
		})
		return response
	}catch(err){
		dispatch({type: FETCH_SERIES_FAILURE, payload: err.response})
	}
}
export const fetchSeriesById = id => async dispatch => {
	const response = await SeriesAPI.getSeriesDetail(id)

	dispatch({
		type: FETCH_DETAIL,
		payload: response.data.data.results[0]
	})
	return response
}
export const fetchCharactersBySeriesId = id => async dispatch => {
	const response = await SeriesAPI.getCharactersBySeriesId(id)

	dispatch({
		type: FETCH_CHARACTERS,
		payload: response.data.data.results
	})
}
export const fetchComicsBySeriesId = id => async dispatch => {
	const response = await SeriesAPI.getComicsBySeriesId(id)

	dispatch({
		type: FETCH_COMICS,
		payload: response.data.data.results
	})
}
