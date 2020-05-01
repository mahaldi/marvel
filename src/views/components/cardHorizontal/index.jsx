import React from 'react'
import Image from '../../elements/image'
import './style.scss'
import { Link } from 'react-router-dom';
import { cardType } from '../../../utils/helper'

class CardHorizontal extends React.Component {
	_itemInfo = (copyText, payload) => {
		return (
			<div className="item-info">
				<div className="left-side">
					<p>{copyText} :</p>
				</div>
				<div className="info-content">
					<p>{payload || 'No Data'}</p>
				</div>
			</div>
		)
	}
	render() {
		let { data } = this.props
		return (
			<React.Fragment>
				<Link className="mws-card-horizontal columns" to={'/' + cardType(data) + '/' + data.id}>
					<div className="column is-one-quarter">
						<Image src={data.thumbnail.path} ext={data.thumbnail.extension} alt={data.title} />
					</div>
					<div className="column info">
						{ this._itemInfo( 'Title', data.name || data.title ) }
						{ this._itemInfo( 'Isbn', data.isbn ) }
						{ this._itemInfo( 'Description', data.description ) }
					</div>
				</Link>
			</React.Fragment>
		)
	}
}

export default CardHorizontal
