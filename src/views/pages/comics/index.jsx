import React from 'react'
import { fetchComics } from '../../../actions'
import { connect } from 'react-redux';
import CardList from '../../components/cardList'
import './style.scss'
import Loading from '../../components/loading/index'
import { cardType } from '../../../utils/helper'

class Comics extends React.Component{
	componentDidMount() {
		this.props.fetchComics({limit : 20})
	}
	render() {
		let { comics } = this.props
		if( comics.length < 1 )
			return <Loading />
		return (
			<React.Fragment>
				<div className="hero-body">
					<div className="container has-text-centered">
						<CardList data={comics} type={cardType(comics[0])}/>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		comics: state.comics
	}
}
export default connect(mapStateToProps, { fetchComics })(Comics)
