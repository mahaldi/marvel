import { combineReducers } from 'redux'
import { characterList, character, characterListPagination } from './marvelCharacter(s)'

const indexReducer = combineReducers({
    characters: characterList,
    character: character,
    pagination: characterListPagination
})

export default indexReducer