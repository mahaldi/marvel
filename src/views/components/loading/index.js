import React from 'react'
import './style.scss'
import LoadingGif from '../../../assets/static/pokeball.gif'

const Loading = () => {
	return (
		<div className="mws-loading">
			<img src={LoadingGif} alt="LoadingGif Pokemball" />
		</div>
	)
}

export default Loading;