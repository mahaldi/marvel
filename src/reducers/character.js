import {
	FETCH_CHARACTER_BEGIN,
	FETCH_CHARACTER,
	FETCH_CHARACTER_FAILURE
} from '../actions/types'
import initialState from './initialState'

export default (state = initialState.character, action) => {
	switch (action.type) {
		case FETCH_CHARACTER_BEGIN:
			return { ...state, loading: true }
		case FETCH_CHARACTER:
			return { ...state, loading: false, item: action.payload, error: false }
		case FETCH_CHARACTER_FAILURE:
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}
