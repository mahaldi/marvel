import React from 'react'
import { fetchCharacters } from '../../../actions/characters'
import { fetchComics } from '../../../actions/comics'
import { fetchSeries } from '../../../actions/series'
import { connect } from 'react-redux';
import './style.scss'
import loadable from '@loadable/component'

const ContainerPage = loadable(() => import('../../components/containerPages'))
const Footer = loadable(() => import('../../components/footer'))
const SwiperCard = loadable(() => import('../../components/swiperCard'))

class Home extends React.Component {

	componentDidMount(){
		this.props.fetchCharacters({})
		this.props.fetchComics({})
		this.props.fetchSeries({})
	}
	render() {
		let { characters, comics, serieses } = this.props

		return (
			<React.Fragment>
				<ContainerPage className="mws-marvel-home">
					<SwiperCard data={characters.items} type="Characters" loading={characters.loading} error={characters.error} />
					<SwiperCard data={comics.items} type="Comics" loading={comics.loading} error={characters.error} />
					<SwiperCard data={serieses.items} type="Series" loading={serieses.loading} error={characters.error} />
					<Footer />
				</ContainerPage>
			</React.Fragment>
		)
	}
}
const mapStateToProps = (state) =>{
	return {
		characters : state.characters,
		comics: state.comics,
		serieses: state.serieses
	}
}
export default connect( mapStateToProps, { fetchCharacters, fetchComics, fetchSeries })(Home)
