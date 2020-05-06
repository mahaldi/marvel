import React from 'react'
import {fetchCharacter} from '../../../actions/characters'
import {fetchSeriesById} from '../../../actions/series'
import {fetchCommicById} from '../../../actions/comics'
import { connect } from 'react-redux'
import './style.scss'
import loadable from '@loadable/component'

const ErrorContent = loadable(() => import('../../components/ErrorContent'))
const Box = loadable(() => import('../../components/box'))
const Card = loadable(() => import('../../components/card'))

class Character extends React.Component {
	state = {
		error : {
			isError : false,
			status : ''
		}
	}
	getDataDetail = async () => {
		try{
			let { id, type } = this.props.match.params

			if( type === 'character' ){
				await this.props.fetchCharacter(id)
			} else if ( type === 'comic' ){
				this.props.fetchCommicById(id)
			} else if (type === 'series') {
				this.props.fetchSeriesById(id)
			} else {
				this.props.history.push('/')
				return window.location.reload()
			}
		}catch(err){
			this.setState({
				error : {
					isError: true,
					status: err.response.data
				}
			})
		}
	}
	componentDidMount() {
		this.getDataDetail()

		this.unlisten = this.props.history.listen((location, action) => {
			this.getDataDetail()
    });
	}
	componentWillUnmount(){
		this.unlisten()
	}
	render() {
		let { id, type } = this.props.match.params
		let error = this.props[type].error
		let loading = this.props[type].loading
		let data = this.props[type].item

		if( error )
			return <ErrorContent error={error.data.status}/>

		return (
			<React.Fragment>
				<div className="hero-body character-detail-page">
					<div className="container has-text-centered">
						<div className="columns">
							<div className="column is-one-fifth">
								<Card data={data} loading={loading}/>
							</div>
							<div className="column">
								{ ( type === 'character' || type === 'series') &&
									<React.Fragment>
										<p className="title">Comics</p>
										<Box type="comics" by={type} id={id} />
									</React.Fragment>
								}
								{
									( type === 'comic' || type === 'series') &&
									<React.Fragment>
										<p className="title">Characters</p>
										<Box type="characters" by={type} id={id} />
									</React.Fragment>
								}
								{
									(type !== 'comic' && type !== 'series') &&
									<React.Fragment>
										<p className="title">Series</p>
										<Box type="series" by={type} id={id} />
									</React.Fragment>
								}
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
		character: state.character,
		comic: state.comic,
		series: state.series
	}
}
export default connect(mapStateToProps, { fetchCharacter, fetchSeriesById, fetchCommicById })(Character)
