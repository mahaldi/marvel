import { combineReducers } from 'redux'
import { characterList, character, characterListPagination } from './characters'
import comics from './comics'
import series from './series'
import systems from './systems'
const indexReducer = combineReducers({
	characters: characterList,
	character: character,
	pagination: characterListPagination ,
	comics,
	series,
	systems
})

export default indexReducer
