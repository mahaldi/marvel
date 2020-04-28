import React from 'react'
import './style.scss'
import Swiper from 'react-id-swiper';
import Card from '../card'
import MiniLoader from '../loader/miniLoader'
import { Link } from 'react-router-dom';
import ErrorContent from '../ErrorContent'

const SwiperCard = (props) => {
	const params = {
		slidesPerView: 'auto',
		spaceBetween:  16,
		slidesOffsetBefore: 16,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	}

	let { data, loading, error, type } = props
	if( error ) return <ErrorContent error={error.data}/>
	if( loading ) return <MiniLoader />
	return (
		<div className="mws-swiper-card">
			<div className="swiper-card-head">
				<div className="left">
					<p className="title">{ type }</p>
				</div>
				<div className="right">
					<Link to={ '/' + type.toLowerCase() }> Lihat Semua</Link>
				</div>
			</div>
			<Swiper {...params}>
				{
					data.map((item)=>{
						return (
							<div key={item.id} className="card-item">
								<Card data={item}/>
							</div>
						)
					})
				}
      </Swiper>
		</div>
	)
}

export default SwiperCard
