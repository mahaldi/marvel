import React from 'react'
import { fetchCharacters } from '../../../actions/characters'
import { fetchComics } from '../../../actions/comics'
import { fetchSeries } from '../../../actions/series'
import { connect } from 'react-redux';
import './style.scss'
import Loading from '../../components/loading/index'
import ContainerPage from '../../components/containerPages'
import Footer from '../../components/footer'
import SwiperCard from '../../components/swiperCard'

class Home extends React.Component {

	componentDidMount(){
		this.props.fetchCharacters({})
		this.props.fetchComics({})
		this.props.fetchSeries({})
	}
	render() {
		let { characters, comics, series } = this.props
		if( characters.loading )
			return <Loading />
		return (
			<React.Fragment>
				<ContainerPage className="mws-marvel-home">
					<SwiperCard data={characters.items} type="Characters" loading={characters.loading} error={characters.error} />
					<SwiperCard data={comics.items} type="Comics" loading={comics.loading} error={characters.error} />
					<SwiperCard data={series.items} type="Series" loading={series.loading} error={characters.error} />
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
		series: state.series
	}
}
export default connect( mapStateToProps, { fetchCharacters, fetchComics, fetchSeries })(Home)
