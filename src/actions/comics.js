import {
	FETCH_CHARACTERS,
	CHARACTERS_PAGINATION,
	FETCH_COMICS,
	FETCH_EXPLORE,
	FETCH_DETAIL
} from './types'

import ComicsAPI  from '../apis/comics'


export const fetchComics = ({limit= 20, offset = 20}) => async dispatch => {
	const response = await ComicsAPI.getComics({limit, offset})
	dispatch({
			type: CHARACTERS_PAGINATION,
			payload: response.data.data
	})
	dispatch({
		type: FETCH_COMICS,
		payload: response.data.data.results
	})
	dispatch({
			type: FETCH_EXPLORE,
			payload: response.data.data.results
	})
	return response.data.data.results
}
export const fetchCommicById = id => async dispatch => {
	const response = await ComicsAPI.getComicDetail(id)

	dispatch({
		type: FETCH_DETAIL,
		payload: response.data.data.results[0]
	})
	return response
}
export const fetchCharacterByComicId = id => async dispatch => {
	const response = await ComicsAPI.getCharactersByComicId(id)

	dispatch({
		type: FETCH_CHARACTERS,
		payload: response.data.data.results
	})
}
