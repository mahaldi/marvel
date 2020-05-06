import { combineReducers } from 'redux'
import characters from './characters'
import comics from './comics'
import serieses from './serieses'
import systems from './systems'
import explore from './explore'
import detail from './detail'
import character from './character'
import comic from './comic'
import series from './series'

const reducer = combineReducers({
	character,
	characters,
	comic,
	comics,
	series,
	serieses,
	systems,
	explore,
	detail
})

export default reducer
