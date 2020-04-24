import React from 'react'
import { fetchCharacter } from '../../../actions/index'
import { connect } from 'react-redux'
import Card from '../../components/card'
import Loading from '../../components/loading/index'
import Box from '../../components/box'
import ErrorContent from '../../components/ErrorContent'
import './style.scss'

class Character extends React.Component {
	state = {
		error : {
			isError : false,
			status : ''
		}
	}
	componentDidMount() {
		let { id } = this.props.match.params
		this.props.fetchCharacter(id).then((res)=>{

		}).catch((err)=>{
			this.setState({
				error : {
					isError: true,
					status: err.response.data.status
				}
			})
		})
	}
	render() {
		let { character } = this.props
		let { id } = this.props.match.params
		let { error } = this.state

		if( error.isError )
			return <ErrorContent errorStatus={error.status}/>

		if( Object.keys(character).length < 1 )
			return <Loading />

		return (
			<React.Fragment>
				<div className="hero-body character-detail-page">
					<div className="container has-text-centered">
						<div className="columns">
							<div className="column is-one-fifth">
								<Card data={character}/>
							</div>
							<div className="column">
								<p className="title">Comics</p>
								<Box type="comics" id={id} />
								<p className="title">Series</p>
								<Box type="series" id={id} />
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		character: state.character
	}
}
export default connect(mapStateToProps, { fetchCharacter })(Character)
