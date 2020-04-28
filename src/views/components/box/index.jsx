import React from 'react'
import { connect } from 'react-redux'
import {
	fetchSeriesByCharacter,
	fetchComicsByCharacter
} from '../../../actions/characters'
import { fetchCharacterByComicId } from '../../../actions/comics'
import { fetchCharactersBySeriesId, fetchComicsBySeriesId } from '../../../actions/series'

// import PropTypes  from 'prop-types'
import MiniLoader from '../loader/miniLoader'
import CardHorizontal from '../cardHorizontal'

class Box extends React.Component {
	static defaultProps = {
		type : 'comics'
	}
	type = () => {
		let { type } = this.props
		return type
	}
	componentDidMount() {
		let { id, by } = this.props

		if( this.type() === 'comics' && by === 'character')
			this.props.fetchComicsByCharacter(id)
		else if( this.type() === 'characters' && by === 'comic')
			this.props.fetchCharacterByComicId(id)
		else if( this.type() === 'comics' && by === 'series')
			this.props.fetchComicsBySeriesId(id)
		else if( this.type() === 'characters' && by === 'series')
			this.props.fetchCharactersBySeriesId(id)
		else
			this.props.fetchSeriesByCharacter(id)
	}
	dataRendered = () => {
		if( this.type() === 'comics' )
			return this.props.comics
		else if ( this.type() === 'characters')
			return this.props.characters
		return this.props.series
	}
	render() {
		if( this.dataRendered().length < 1 )
			return <MiniLoader />
		let data = this.dataRendered().items
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
		series: state.series,
		characters: state.characters
	}
}
export default connect(mapStateToProps, {
	fetchComicsByCharacter,
	fetchSeriesByCharacter,
	fetchCharacterByComicId,
	fetchCharactersBySeriesId,
	fetchComicsBySeriesId })(Box)
