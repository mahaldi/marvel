import {
	FETCH_CHARACTERS,
	CHARACTERS_PAGINATION,
	FETCH_COMICS,
	FETCH_SERIES,
	FETCH_EXPLORE,
	FETCH_DETAIL
} from './types'

import SeriesAPI from '../apis/series'

export const fetchSeries = ({limit= 20, offset = 20}) => async dispatch => {
	const response = await SeriesAPI.getSeries({limit, offset})
	dispatch({
			type: CHARACTERS_PAGINATION,
			payload: response.data.data
	})
	dispatch({
		type: FETCH_SERIES,
		payload: response.data.data.results
	})
	dispatch({
			type: FETCH_EXPLORE,
			payload: response.data.data.results
	})
	return response.data.data.results
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
