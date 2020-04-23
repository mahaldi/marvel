import { FETCH_COMICS } from '../actions/types'
import initialState from './initialState'

export default ( state=initialState.comics, action ) => {
	switch(action.type) {
		case FETCH_COMICS:
			return action.payload
		default:
			return state
	}
}
