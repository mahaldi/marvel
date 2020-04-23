import { IS_LOADING } from '../actions/types'
import initialState from './initialState'
export default (state = initialState.isLoading, action) => {
	switch (action.type) {
		case IS_LOADING:
			return action.payload
		default:
			return state
	}
}