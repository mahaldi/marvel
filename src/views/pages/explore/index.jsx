import React from 'react'
import {fetchCharacters} from '../../../actions/characters'
import {fetchSeries} from '../../../actions/series'
import {fetchComics} from '../../../actions/comics'
import { fetchExplore } from '../../../actions/explore'
import { connect } from 'react-redux';
import CardList from '../../components/cardList'
import './style.scss'
import Loading from '../../components/loading/index'
import ContainerPage from '../../components/containerPages'

class Explore extends React.Component{
	lintenRouteChanging = () => {
		this.unlisten = this.props.history.listen((location, action) => {
			window.location.reload()
    });
	}
	getData = () => {
		let { params } = this.props.match
		let limit = 20
		this.props.fetchExplore({limit}, params.explore)
	}
	destroyLintening = () => {
		this.unlisten();
	}
	componentDidMount() {
		let { params } = this.props.match
		if (params.explore !== 'comics' && params.explore !== 'series' && params.explore !== 'characters') {
			this.props.history.push('/characters')
			window.location.reload()
			return
		}
		this.getData()
		this.lintenRouteChanging()
	}
	componentWillUnmount() {
		this.destroyLintening();
	}
	render() {
		let { explore } = this.props
		let { params } = this.props.match
		if( explore.loading )
			return <Loading />
		return (
			<React.Fragment>
				<ContainerPage>
					<CardList data={explore.items} type={params.explore} />
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
