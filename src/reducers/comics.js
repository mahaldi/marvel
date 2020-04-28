import { FETCH_COMICS, FETCH_COMICS_BEGIN, FETCH_SERIES_FAILURE } from '../actions/types'
import initialState from './initialState'

export default ( state=initialState.comics, action ) => {
	switch(action.type) {
		case FETCH_COMICS_BEGIN:
			return { ...state, loading: true }
		case FETCH_COMICS:
			return { ...state, loading: false, items: action.payload, error: false }
		case FETCH_SERIES_FAILURE:
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}
