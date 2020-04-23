import React from 'react'
import { connect } from 'react-redux'
import { fetchComics, fetchSeries } from '../../../actions/index'
import PropTypes  from 'prop-types'
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
		let { id } = this.props

		if( this.type() === 'comics' )
			this.props.fetchComics(id)
		else
			this.props.fetchSeries(id)
	}
	dataRendered = () => {
		if( this.type() === 'comics' )
			return this.props.comics
		return this.props.series
	}
	render() {
		return (
			<React.Fragment>
				<div className="box">

					{(
						()=>{
							if( this.dataRendered().length < 1 ) {
								return <MiniLoader />
							}
						}
					)()}

					{
						this.dataRendered().map((item)=>{
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
		series: state.series
	}
}
export default connect(mapStateToProps, { fetchComics, fetchSeries })(Box)
