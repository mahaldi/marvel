import {
	FETCH_CHARACTERS,
	FETCH_COMICS,
	FETCH_DETAIL,
	FETCH_COMICS_BEGIN,
	FETCH_COMICS_FAILURE
} from './types'

import ComicsAPI  from '../apis/comics'


export const fetchComics = ({limit= 20, offset = 20}) => async dispatch => {
	try{
		dispatch({type: FETCH_COMICS_BEGIN})
		const response = await ComicsAPI.getComics({limit, offset})

		dispatch({
			type: FETCH_COMICS,
			payload: response.data.data.results
		})
		return response
	}catch(err){
		dispatch({type: FETCH_COMICS_FAILURE, payload: err.response})
		return err
	}
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
