import React from 'react'
import './style.scss'
import Image from '../../elements/image/index'
import history from '../../../history'
import { cardType } from '../../../utils/helper'

class CardHorizontalMini extends React.Component{
	redirect = () => {
		let { data } = this.props
		let middleUrl = cardType(data)

		history.push(`/${middleUrl}/${data.id}`)
		window.location.reload()
	}
	render() {
		let { data } = this.props
		let middleUrl = cardType(data)
		return (
			<React.Fragment>
				<a className="mws-card-mini-horizontal" href={`/${middleUrl}/${this.props.data.id}`} onMouseDown={this.redirect}>
					<div className="mws-img">
						<Image src={data.thumbnail.path} size="portrait_small" ext={data.thumbnail.extension}/>
					</div>
					<div className="">
						<p> { data.name || data.title || 'No Name' } </p>
						<p className="desc"> { data.description || 'No Description' } </p>
					</div>
				</a>
			</React.Fragment>
		)

	}
}


export default CardHorizontalMini
