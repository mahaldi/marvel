import React from 'react'
import { fetchCharacters } from '../../../actions'
import { connect } from 'react-redux';

class Home extends React.Component {
	componentDidMount(){
		this.props.fetchCharacters()
	}
	render() {
		return (
			<React.Fragment>
				<div className="hero-body">
					<div className="container has-text-centered">
						<p className="title">Title</p>
						<p className="subtitle">Subtitle</p>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
const mapStateToProps = (state) =>{
	return {
		characters : state.characters
	}
}
export default connect( mapStateToProps, {fetchCharacters})(Home)