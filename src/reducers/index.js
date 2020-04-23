import { combineReducers } from 'redux'
import { characterList, character, characterListPagination } from './characters'
import comics from './comics'
import series from './series'
const indexReducer = combineReducers({
	characters: characterList,
	character: character,
	pagination: characterListPagination ,
	comics,
	series
})

export default indexReducer
