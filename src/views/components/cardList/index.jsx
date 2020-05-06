import React from 'react'
import './style.scss'
import {fetchCharacters} from '../../../actions/characters'
import {fetchComics} from '../../../actions/comics'
import {fetchSeries} from '../../../actions/series'
import { fetchExplore } from '../../../actions/explore'
import { connect } from 'react-redux';
import CardSkeleton from '../card/skeleton'
import loadable from '@loadable/component'

const MiniLoader = loadable(() => import('../loader/miniLoader'))
const Card = loadable(() => import('../card'))

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
		let { data, isFetching }  = this.props
		if( isFetching )
			return Array.from(new Array(5)).map((item,index)=>(
				<CardSkeleton key={index}/>
			))
		return (
			<div className="card-list">
				{
					data.map((item, index) => {
						return(
							<Card data={item} key={index}/>
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
