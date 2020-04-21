import { combineReducers } from 'redux'
import { characterList, character } from './marvelCharacter(s)'

const indexReducer = combineReducers({
    characters: characterList,
    character: character
})

export default indexReducer