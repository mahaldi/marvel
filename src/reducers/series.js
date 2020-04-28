import initialState from './initialState'
import { FETCH_SERIES, FETCH_SERIES_BEGIN, FETCH_SERIES_FAILURE } from '../actions/types'

export default (state = initialState.series, action) => {
	switch(action.type) {
		case FETCH_SERIES_BEGIN:
			return { ...state, loading: true, error: null }
		case FETCH_SERIES:
			return { ...state, loading: false, error: false, items: action.payload}
		case FETCH_SERIES_FAILURE:
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}
