import React from 'react'
import './style.scss'
import Image from '../image/index'
import history from '../../../history'

class CardHorizontalMini extends React.Component{
	redirect = () => {
		history.push(`/${this.props.data.id}`)
	}
	render() {
		let { data } = this.props
		return (
			<React.Fragment>
				<a className="mws-card-mini-horizontal" href={`/${this.props.data.id}`} onMouseDown={this.redirect}>
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
