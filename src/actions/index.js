import { FETCH_CHARACTERS, FETCH_CHARACTER, CHARACTERS_PAGINATION, FETCH_COMICS, FETCH_SERIES } from './types'
import IndexAPI from '../apis'

export const fetchCharacters = (nameStartsWith=null, limit=20, offset=0) => async dispatch =>{
    let params = {
        nameStartsWith,
        limit,
        offset
    }
    const response = await IndexAPI.getCharacters(params)
    dispatch({
        type: CHARACTERS_PAGINATION,
        payload: response.data.data
    })
    dispatch({
        type: FETCH_CHARACTERS,
        payload: response.data.data.results
    })
    return
}
export const fetchCharacter = id => async dispatch =>{
    const response = await IndexAPI.getCharacter(id)
    dispatch({
        type: FETCH_CHARACTER,
        payload: response.data.data.results[0]
		})
		return response
}
export const fetchComicsByCharacter = characterId => async dispatch => {
	const response = await IndexAPI.getComicsByCharacter(characterId)
	dispatch({
		type: FETCH_COMICS,
		payload: response.data.data.results
	})
}
export const fetchSeriesByCharacter = characterId => async dispatch => {
	const response = await IndexAPI.getSeriesByCharacter(characterId)
	dispatch({
		type: FETCH_SERIES,
		payload: response.data.data.results
	})
}
