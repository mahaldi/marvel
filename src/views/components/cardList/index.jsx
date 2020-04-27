import React from 'react'
import Card from '../card'
import { Link } from 'react-router-dom';
import './style.scss'
import {fetchCharacters} from '../../../actions/characters'
import {fetchComics} from '../../../actions/comics'
import {fetchSeries} from '../../../actions/series'
import { connect } from 'react-redux';
import MiniLoader from '../loader/miniLoader'

class CardList extends React.Component {
	state = {
    isLoading: false,
	}
	fetchNewData = async () => {
		let { offset, limit } = this.props.pagination.payload
		let _offset = offset + limit
		let response = null

		if ( this.props.type === 'comic') {
			response = await this.props.fetchComics({limit, offset: _offset })
		}
		else if( this.props.type === 'series' ) {
			response = await this.props.fetchSeries({limit, offset: _offset })
		} else {
			response = await this.props.fetchCharacters({limit, offset: _offset})
		}
		return response
	}
	handleScroll = async () => {
    if (((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300)) && !this.state.isLoading) {
			this.setState({
				isLoading: true
			});

			this.fetchNewData().then(()=>{
				this.setState({
					isLoading: false
				});
			})
    }
	}
	componentDidMount = () => window.addEventListener('scroll', this.handleScroll)

	componentWillUnmount = () => window.removeEventListener('scroll', this.handleScroll)

	render() {
		let { data, type }  = this.props
		return (
			<div className="card-list">
				{
					data.map((item) => {
						let middleUrl = type
						return(
							<Link to={ '/' + middleUrl + '/' + item.id} key={item.id}>
								<Card data={item} />
							</Link>
						)
					})
				}
				{(
					() => {
						if(this.state.isLoading){
							return <MiniLoader />
						}
					}
				)()}
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		pagination : state.pagination
	}
}
export default connect(mapStateToProps, { fetchCharacters, fetchComics, fetchSeries })(CardList);
