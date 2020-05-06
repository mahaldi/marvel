import {
	FETCH_COMIC_BEGIN,
	FETCH_COMIC,
	FETCH_COMIC_FAILURE
} from '../actions/types'
import initialState from './initialState'

export default ( state=initialState.comic, action ) => {
	switch(action.type) {
		case FETCH_COMIC_BEGIN:
			return { ...state, loading: true }
		case FETCH_COMIC:
			return { ...state, loading: false, item: action.payload, error: false }
		case FETCH_COMIC_FAILURE:
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}
