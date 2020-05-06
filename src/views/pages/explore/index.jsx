import React from 'react'
import {fetchCharacters} from '../../../actions/characters'
import {fetchSeries} from '../../../actions/series'
import {fetchComics} from '../../../actions/comics'
import { fetchExplore } from '../../../actions/explore'
import { connect } from 'react-redux';
import './style.scss'
import loadable from '@loadable/component'

const CardList = loadable(() => import('../../components/cardList'))
const ContainerPage = loadable(() => import('../../components/containerPages'))

class Explore extends React.Component{
	lintenRouteChanging = () => {
		let { params } = this.props.match
		this.unlisten = this.props.history.listen((location, action) => {
			let pathName = location.pathname
			if( params.explore === 'comics' || params.explore === 'series' || params.explore === 'characters')
				this.getData(pathName.slice(1, pathName.length))
    });
	}
	getData = (exploreType = 'characters') => {
		let limit = 20
		this.props.fetchExplore({limit}, exploreType)
	}
	destroyLintening = () => {
		this.unlisten();
	}
	componentDidMount() {
		let { params } = this.props.match
		// redirect if the route in index is wrong
		if (params.explore !== 'comics' && params.explore !== 'series' && params.explore !== 'characters') {
			this.props.history.push('/characters')
			window.location.reload()
			return
		}
		this.getData(params.explore)
		this.lintenRouteChanging()
	}
	componentWillUnmount() {
		this.destroyLintening();
	}
	render() {
		let { explore } = this.props
		let { params } = this.props.match
		return (
			<React.Fragment>
				<ContainerPage>
					<p className="title">{params.explore.toUpperCase()}</p>
					<CardList data={explore.items} isFetching={ explore.loading } type={params.explore} />
				</ContainerPage>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		explore: state.explore
	}
}
export default connect(mapStateToProps, { fetchComics, fetchSeries, fetchCharacters, fetchExplore })(Explore)
