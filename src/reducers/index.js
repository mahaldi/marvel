import { combineReducers } from 'redux'
import { characterList, character, characterListPagination } from './characters'
import comics from './comics'
import series from './series'
import systems from './systems'
import explore from './explore'
import detail from './detail'

const reducer = combineReducers({
	characters: characterList,
	character: character,
	pagination: characterListPagination ,
	comics,
	series,
	systems,
	explore,
	detail
})

export default reducer
