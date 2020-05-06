import initialState from './initialState'
import { FETCH_SERIESES, FETCH_SERIESES_BEGIN, FETCH_SERIESES_FAILURE } from '../actions/types'

export default (state = initialState.serieses, action) => {
	switch(action.type) {
		case FETCH_SERIESES_BEGIN:
			return { ...state, loading: true, error: null }
		case FETCH_SERIESES:
			return { ...state, loading: false, error: false, items: action.payload}
		case FETCH_SERIESES_FAILURE:
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}
