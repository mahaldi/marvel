import { combineReducers } from 'redux'
import characters from './characters'
import comics from './comics'
import series from './series'
import systems from './systems'
import explore from './explore'
import detail from './detail'

const reducer = combineReducers({
	characters,
	comics,
	series,
	systems,
	explore,
	detail
})

export default reducer
