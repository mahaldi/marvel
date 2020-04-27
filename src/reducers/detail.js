import { FETCH_DETAIL } from '../actions/types'
import initialState from './initialState'

export default ( state=initialState.detail, action ) => {
	switch(action.type) {
		case FETCH_DETAIL:
			return action.payload
		default:
			return state
	}
}
