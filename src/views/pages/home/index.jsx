import React from 'react'
import { fetchCharacters } from '../../../actions/characters'
import { connect } from 'react-redux';
import CardList from '../../components/cardList'
import './style.scss'
import Loading from '../../components/loading/index'
import ContainerPage from '../../components/containerPages'

class Home extends React.Component {
	componentDidMount(){
		if(this.props.characters.length < 1)
			this.props.fetchCharacters({})
	}
	render() {
		let { characters } = this.props
		if( characters.length < 1 )
			return <Loading />
		return (
			<React.Fragment>
				<ContainerPage className="testing">
					<CardList data={characters}/>
				</ContainerPage>
			</React.Fragment>
		)
	}
}
const mapStateToProps = (state) =>{
	return {
		characters : state.explore.items
	}
}
export default connect( mapStateToProps, {fetchCharacters})(Home)
