import React from 'react'
import {fetchCharacters} from '../../../actions/characters'
import {fetchSeries} from '../../../actions/series'
import {fetchComics} from '../../../actions/comics'
import { connect } from 'react-redux';
import CardList from '../../components/cardList'
import './style.scss'
import Loading from '../../components/loading/index'
import { cardType } from '../../../utils/helper'
import ContainerPage from '../../components/containerPages'

class Explore extends React.Component{
	componentDidMount() {
		let { params } = this.props.match
		let limit = 20

		if(this.props.explore.length < 1){
			if(params.explore === 'comics')
				this.props.fetchComics({limit})
			else if (params.explore === 'series')
				this.props.fetchSeries({limit})
			else if (params.explore === 'characters')
				this.props.fetchCharacters({limit})
			else {
				this.props.history.push('/characters')
				window.location.reload()
			}
		}
	}
	render() {
		let { explore } = this.props
		if( explore.length < 1 )
			return <Loading />
		return (
			<React.Fragment>
				<ContainerPage>
					<CardList data={explore} type={cardType(explore[0])}/>
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
export default connect(mapStateToProps, { fetchComics, fetchSeries, fetchCharacters })(Explore)
