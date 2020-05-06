import React from 'react'
import { connect } from 'react-redux'
import {
	fetchSeriesByCharacter,
	fetchComicsByCharacter
} from '../../../actions/characters'
import { fetchCharacterByComicId } from '../../../actions/comics'
import { fetchCharactersBySeriesId, fetchComicsBySeriesId } from '../../../actions/series'
import loadable from '@loadable/component'

// import PropTypes  from 'prop-types'
const CardHorizontal = loadable(() => import('../cardHorizontal'))
const CardHorizontalSkeleton = loadable(() => import('../cardHorizontal/skeleton'))

class Box extends React.Component {
	static defaultProps = {
		type : 'comics'
	}
	componentDidMount() {
		let { id, by, type } = this.props

		if( type === 'comics' && by === 'character')
			this.props.fetchComicsByCharacter(id)
		else if( type === 'characters' && by === 'comic')
			this.props.fetchCharacterByComicId(id)
		else if( type === 'comics' && by === 'series')
			this.props.fetchComicsBySeriesId(id)
		else if( type === 'characters' && by === 'series')
			this.props.fetchCharactersBySeriesId(id)
		else
			this.props.fetchSeriesByCharacter(id)
	}
	data = () => {
		return this.props[this.props.type]
	}
	render() {
		if( this.data().items.length < 1 )
			return <CardHorizontalSkeleton />
		let data = this.data().items
		return (
			<React.Fragment>
				<div className="box">
					{
						data.map((item)=>{
							return (
								<div key={item.id}>
									<CardHorizontal data={item}/>
								</div>)
						})
					}
				</div>
			</React.Fragment>
		)
	}
}
// Box.PropTypes = {
// 	type: PropTypes.string.isRequired,
// 	id: PropTypes.number.isRequired
// }
const mapStateToProps = (state) => {
	return {
		comics: state.comics,
		series: state.serieses,
		characters: state.characters
	}
}
export default connect(mapStateToProps, {
	fetchComicsByCharacter,
	fetchSeriesByCharacter,
	fetchCharacterByComicId,
	fetchCharactersBySeriesId,
	fetchComicsBySeriesId })(Box)
