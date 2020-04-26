import React from 'react'
import { fetchCharacters } from '../../../actions'
import { connect } from 'react-redux';
import CardList from '../../components/cardList'
import './style.scss'
import Loading from '../../components/loading/index'

class Home extends React.Component {
	componentDidMount(){
		if(this.props.characters.length < 1)
			this.props.fetchCharacters()
	}
	render() {
		let { characters } = this.props
		if( characters.length < 1 )
			return <Loading />
		return (
			<React.Fragment>
				<div className="hero-body">
					<div className="container has-text-centered">
						<CardList data={characters}/>
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
