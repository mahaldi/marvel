import { IS_LOADING, IS_OVERLAY } from '../actions/types'
import initialState from './initialState'

export default (state = initialState.systems, action) => {
	switch (action.type) {
		case IS_LOADING:
			return { ...state, isLoading : action.payload}
		case IS_OVERLAY:
			return { ...state, isOverlay : action.payload}
		default:
			return state
	}
}
