import { FETCH_CHARACTERS, FETCH_CHARACTER } from './types'
import IndexAPI from '../apis'
export const fetchCharacters = (nameStartsWith=null, limit=20, offset=0) => async dispatch =>{
    let params = {
        nameStartsWith,
        limit,
        offset
    }
    const response = await IndexAPI.getCharacters(params)
    dispatch({
        type: FETCH_CHARACTERS,
        payload: response.data.data
    })
}
export const fetchCharacter = id => async dispatch =>{
    const response = await IndexAPI.getCharacter(id)
    dispatch({
        type: FETCH_CHARACTER,
        payload: response.data.data
    })
}