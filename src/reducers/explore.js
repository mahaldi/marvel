import { FETCH_EXPLORE } from '../actions/types'
import initialState from './initialState'

export default ( state=initialState.explore, action ) => {
	switch(action.type) {
		case FETCH_EXPLORE:
			return state.concat(action.payload)
		default:
			return state
	}
}
