import { IS_OVERLAY, IS_LOADING } from './types'

export const setLoading = (val) => dispatch => {

	dispatch({
		type: IS_LOADING,
		payload: val
	})
}

export const setOverlay = (val) => dispatch => {

	dispatch({
		type: IS_OVERLAY,
		payload: val
	})
}
