import React from 'react'
import './style.scss'
import { cardType } from '../../../utils/helper'
import { Link } from 'react-router-dom';
import loadable from '@loadable/component'
import CardSkeleton from './skeleton'

const Button = loadable(() => import('@material-ui/core/Button'))
const Image = loadable(() => import('../../elements/image'))

class Card extends React.Component {

	render() {
		let { data, loading } = this.props
		if( loading || Object.keys(data).length < 1 ) return <CardSkeleton />
		return (
			<React.Fragment>
				<Button>
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
				</Button>
			</React.Fragment>
        )
    }
}

export default Card;
