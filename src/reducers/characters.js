import { FETCH_CHARACTER, FETCH_CHARACTERS, CHARACTERS_PAGINATION } from '../actions/types'
import initialState from './initialState'

export const characterList = (state = initialState.characters, action) => {
	switch (action.type) {
		case FETCH_CHARACTERS:
			return state.concat(action.payload)
		default:
			return state
	}
}
export const characterListPagination = (state=initialState.charactersPagination, action) => {
	switch(action.type) {
		case CHARACTERS_PAGINATION:
			return { ...state, payload : action.payload }
		default:
			return state
	}
}
export const character = (state = initialState.character, action) => {
	switch (action.type) {
		case FETCH_CHARACTER:
			return action.payload;
		default:
			return state
	}
}
