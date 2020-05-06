import React from 'react'
import './style.scss'
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component'
import CardSkeleton from '../card/skeleton'

const Card = loadable(() => import('../card'))
const ErrorContent = loadable(() => import('../ErrorContent'))

class SwiperCard extends React.Component {

	_renderSwiper = () => {
		let { data } = this.props
		let { loading } = this.props

		const params = {
			slidesPerView: 'auto',
			spaceBetween:  16,
			slidesOffsetBefore: 16,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		}
		if( loading ) 
		return (
			<Swiper {...params}>
				{
					Array.from(new Array(5)).map((item,index)=>(
						<div className="card-item"key={index} ><CardSkeleton key={index}/></div>
					))
				}
			</Swiper>
		)
		return (
			<Swiper {...params}>
				{
					data.map((item, index)=>{
						return (
							<div key={index} className="card-item">
								<Card data={item}/>
							</div>
						)
					})
				}
			</Swiper>
		)
	}
	render() {
		let { loading, error, type } = this.props
		if( error ) return <ErrorContent error={error.data}/>
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
				{ this._renderSwiper() }
			</div>
		)
	}

}

export default SwiperCard
