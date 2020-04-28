import React from 'react'
import './style.scss'
import Image from '../../elements/image'
import { cardType } from '../../../utils/helper'
import { Link } from 'react-router-dom';

class Card extends React.Component {

	render() {
		let { data } = this.props
		return (
			<React.Fragment>
				<Link className="card" to={ '/' + cardType(data) + '/' + data.id}>
					<div className="card-content-wrap">
						<div className="card-image">
							<figure className="image is-4by3">
								<Image src={data.thumbnail.path} ext={data.thumbnail.extension} alt={data.name}/>
							</figure>
						</div>
						<div className="card-content">
							<ul>
								<li>Name : <span> {data.name || data.title} </span></li>
								{ (cardType(data) === 'series' || cardType(data) === 'character') && <li>Comics : <span> {data.comics.available} </span></li>}
								{ (cardType(data) === 'comic' || cardType(data) === 'character') &&  <li>Series : <span> {data.series.available} </span></li>}
							</ul>
						</div>
					</div>
				</Link>
			</React.Fragment>
        )
    }
}

export default Card;
