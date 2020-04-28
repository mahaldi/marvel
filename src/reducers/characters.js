import { FETCH_CHARACTER, FETCH_CHARACTERS, FETCH_CHARACTERS_BEGIN, FETCH_CHARACTERS_FAILURE } from '../actions/types'
import initialState from './initialState'

export const characterList = (state = initialState.characters, action) => {
	switch (action.type) {
		case FETCH_CHARACTERS:
			return state.concat(action.payload)
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
export default (state = initialState.characters, action) => {
	switch (action.type) {
		case FETCH_CHARACTERS_BEGIN:
			return { ...state, loading: true }
		case FETCH_CHARACTERS:
			return { ...state, loading: false, items: action.payload, error: false }
		case FETCH_CHARACTERS_FAILURE:
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}
