import React from 'react'
import {fetchCharacter} from '../../../actions/characters'
import {fetchSeriesById} from '../../../actions/series'
import {fetchCommicById} from '../../../actions/comics'
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
			//kalau dari card mini horizontal ke halaman ini gk kepanggil lg endpointnya
			window.location.reload();
    });
	}
	componentWillUnmount(){
		this.unlisten()
	}
	render() {
		let { detail } = this.props
		let { id, type } = this.props.match.params
		let { error } = this.state
		if( error.isError )
			return <ErrorContent error={error.status}/>

		if( Object.keys(detail).length < 1 )
			return <Loading />

		return (
			<React.Fragment>
				<div className="hero-body character-detail-page">
					<div className="container has-text-centered">
						<div className="columns">
							<div className="column is-one-fifth">
								<Card data={detail}/>
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
		detail: state.detail
	}
}
export default connect(mapStateToProps, { fetchCharacter, fetchSeriesById, fetchCommicById })(Character)
