import React from 'react'
import Card from '../card'
import { Link } from 'react-router-dom';
import './style.scss'
import {fetchCharacters} from '../../../actions/characters'
import {fetchComics} from '../../../actions/comics'
import {fetchSeries} from '../../../actions/series'
import { fetchExplore } from '../../../actions/explore'
import { connect } from 'react-redux';
import MiniLoader from '../loader/miniLoader'

class CardList extends React.Component {
	state = {
    isLoading: false,
	}

	handleScroll = async () => {
		let { offset, limit } = this.props.pagination
		let _offset = offset + limit

    if (((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300)) && !this.state.isLoading) {
			this.setState({
				isLoading: true
			});

			this.props.fetchExplore({offset: _offset, limit}, this.props.type, true).then((res)=>{
				this.setState({
					isLoading: false
				});
			})
    }
	}
	loadingState = () => {
		if(this.state.isLoading)
			return <MiniLoader />
		return null
	}
	componentDidMount = () => window.addEventListener('scroll', this.handleScroll)

	componentWillUnmount = () => window.removeEventListener('scroll', this.handleScroll)

	render() {
		let { data, type }  = this.props
		return (
			<div className="card-list">
				{
					data.map((item) => {
						let middleUrl = type.slice(0,-1)
						return(
							<Link to={ '/' + middleUrl + '/' + item.id} key={item.id}>
								<Card data={item} />
							</Link>
						)
					})
				}
				{ this.loadingState() }
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		pagination : state.explore.pagination
	}
}
export default connect(mapStateToProps, { fetchCharacters, fetchComics, fetchSeries, fetchExplore })(CardList);
