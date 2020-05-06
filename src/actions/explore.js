import {
	FETCH_EXPLORE_BEGIN,
	FETCH_EXPLORE_FAILURE,
	FETCH_EXPLORE,
	INFINITE_EXPLORE
} from './types'
import { fetchCharacters } from './characters'
import { fetchComics } from './comics'
import { fetchSeries } from './series'
import pMinDelay from 'p-min-delay'

export const explorePagination = (response) => dispatch => {

	let data = response.data.data
	let ExplorePagination = {
		offset: data.offset,
		limit: data.limit,
		total: data.total,
		count: data.count
	}
	return ExplorePagination
}
export const dispatchExploreSuccess = (response) => dispatch => {
	dispatch({
		type: FETCH_EXPLORE,
		payload: response.data.data.results,
		pagination: dispatch(explorePagination(response))
	})
}

export const dispatchExploreBegin = () => dispatch => {
	dispatch({ type: FETCH_EXPLORE_BEGIN })
}

export const dispatchExploreFailure = (err) => dispatch => {
	dispatch({ type: FETCH_EXPLORE_FAILURE, payload: err })
}

export const dispatchInfiniteExplore = (response) => dispatch => {
	dispatch({
		type: INFINITE_EXPLORE,
		payload: response.data.data.results,
		pagination: dispatch(explorePagination(response))
	})
}

export const fetchExplore = (params={}, type = 'characters', isInfinite = false) => async dispatch =>{
	try{
		if( !isInfinite )
			dispatch(dispatchExploreBegin())

		let response, delay= 2000
		if(type === 'characters')
			response = await pMinDelay(dispatch(fetchCharacters(params)), delay)
		else if(type === 'comics')
			response = await pMinDelay(dispatch(fetchComics(params)), delay)
		else
			response = await pMinDelay(dispatch(fetchSeries(params)), delay)

		if(!isInfinite)
			dispatch(dispatchExploreSuccess(response))
		else
			dispatch(dispatchInfiniteExplore(response))
		return response
	}catch(err){
		dispatch(dispatchExploreFailure(err))
		return err
	}
}
