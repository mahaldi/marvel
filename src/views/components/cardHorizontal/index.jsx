import React from 'react'
import Image from '../image'
import './style.scss'
class CardHorizontal extends React.Component {

	render() {
		let { data } = this.props
		return (
			<React.Fragment>
				<div className="mws-card-horizontal columns">
					<div className="column is-one-quarter">
						<Image src={data.thumbnail.path} ext={data.thumbnail.extension} alt={data.title} />
					</div>
					<div className="column info">
						<div className="item-info">
							<div className="left-side">
								<p>Title :</p>
							</div>
							<div className="info-content">
								<p>{data.title || 'No Title'}</p>
							</div>
						</div>
						<div className="item-info">
							<div className="left-side">
								<p>Isbn :</p>
							</div>
							<div className="info-content">
								<p>{data.isbn || 'No Isbn'}</p>
							</div>
						</div>
						<div className="item-info">
							<div className="left-side">
								<p>Description :</p>
							</div>
							<div className="info-content">
								<p>{data.description || 'No Description'}</p>
							</div>
						</div>
						<div className="item-info">
							<div className="left-side">
								<p>More Detail :</p>
							</div>
							<div className="info-content urls">
								{
										data.urls.map( item =>{
											return (
												<a href={item.url} key={item.url}>{item.url}</a>
											)
										})
									}
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default CardHorizontal
