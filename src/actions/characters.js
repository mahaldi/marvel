import {
	FETCH_CHARACTERS,
	FETCH_CHARACTER,
	FETCH_COMICS,
	FETCH_SERIES,
	FETCH_DETAIL,
	FETCH_CHARACTERS_BEGIN,
	FETCH_CHARACTERS_FAILURE
} from './types'

import CharactersAPI from '../apis/characters'


export const fetchCharacters = (params={}) => async dispatch =>{

	try{
		dispatch({type: FETCH_CHARACTERS_BEGIN})

		const response = await CharactersAPI.getCharacters(params)

		dispatch({
			type: FETCH_CHARACTERS,
			payload: response.data.data.results
		})

		return response
	}catch(err){
		dispatch({type: FETCH_CHARACTERS_FAILURE, payload: err.response})
		return err
	}
}
export const fetchCharacter = id => async dispatch =>{
    const response = await CharactersAPI.getCharacterDetail(id)
    dispatch({
        type: FETCH_CHARACTER,
        payload: response.data.data.results[0]
		})
		dispatch({
			type: FETCH_DETAIL,
			payload: response.data.data.results[0]
		})
		return response
}
export const fetchComicsByCharacter = characterId => async dispatch => {
	const response = await CharactersAPI.getComicsByCharacter(characterId)
	dispatch({
		type: FETCH_COMICS,
		payload: response.data.data.results
	})
	return response
}
export const fetchSeriesByCharacter = characterId => async dispatch => {
	const response = await CharactersAPI.getSeriesByCharacter(characterId)

	dispatch({
		type: FETCH_SERIES,
		payload: response.data.data.results
	})
	return response
}
