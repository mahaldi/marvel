import initialState from './initialState'
import { FETCH_SERIES } from '../actions/types'

export default (state = initialState.series, action) => {
	switch(action.type) {
		case FETCH_SERIES:
			return action.payload
		default:
			return state
	}
}
