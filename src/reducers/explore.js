import { FETCH_EXPLORE, FETCH_EXPLORE_BEGIN, FETCH_EXPLORE_FAILURE, INFINITE_EXPLORE } from '../actions/types'
import initialState from './initialState'

export default ( state=initialState.explore, action ) => {
	switch(action.type) {
		case FETCH_EXPLORE_BEGIN:
			return {...state, loading: true}
		case INFINITE_EXPLORE:
			return {...state, loading: false, items: state.items.concat(action.payload), pagination: action.pagination}
		case FETCH_EXPLORE:
			return {...state, loading: false, items: action.payload, pagination: action.pagination}
		case FETCH_EXPLORE_FAILURE:
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}
