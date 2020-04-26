import React from 'react'
import { fetchComicsByCharacter } from '../../../actions'
import { connect } from 'react-redux';
import CardList from '../../components/cardList'
import './style.scss'
import Loading from '../../components/loading/index'

class Comics extends React.Component{
	render() {
		return (
			<React.Fragment>
				Comics
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		comics: state.comics
	}
}
export default connect(mapStateToProps, { fetchComicsByCharacter })(Comics)
