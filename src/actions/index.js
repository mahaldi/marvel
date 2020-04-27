import { FETCH_CHARACTERS, FETCH_CHARACTER, CHARACTERS_PAGINATION, FETCH_COMICS, FETCH_SERIES, FETCH_EXPLORE, FETCH_DETAIL } from './types'
// import IndexAPI from '../apis'
import CharactersAPI from '../apis/characters'
import ComicsAPI  from '../apis/comics'
import SeriesAPI from '../apis/series'

export const fetchCharacters = ({nameStartsWith = null, orderBy = null , limit = 20, offset = 0}) => async dispatch =>{
	const response = await CharactersAPI.getCharacters({nameStartsWith, orderBy, limit, offset})

	dispatch({
			type: CHARACTERS_PAGINATION,
			payload: response.data.data
	})
	dispatch({
			type: FETCH_CHARACTERS,
			payload: response.data.data.results
	})
	dispatch({
			type: FETCH_EXPLORE,
			payload: response.data.data.results
	})
	return response.data.data.results
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
