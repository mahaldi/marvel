import React from 'react'
import Card from '../card'
import { Link } from 'react-router-dom';
import './style.scss'
import { fetchCharacters } from '../../../actions/index'
import { connect } from 'react-redux';
import MiniLoader from '../loader/miniLoader'
class CardList extends React.Component {
	state = {
    isLoading: false,
	}

	handleScroll = () => {
    if (((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300)) && !this.state.isLoading) {
			this.setState({
				isLoading: true
			});
			let { offset, limit } = this.props.pagination.payload
			let _offset = offset + limit
			this.props.fetchCharacters(null, limit, _offset).then(()=>{
				this.setState({
					isLoading: false
				});
			})


    }
	}
	componentDidMount = () => window.addEventListener('scroll', this.handleScroll)

	componentWillUnmount = () => window.removeEventListener('scroll', this.handleScroll)

	render() {
		let { data }  = this.props
		return (
			<div className="card-list">
				{
					data.map((item) => {
						let middleUrl = item.name ? 'character': item.comics && item.title ? 'comic': 'series'
						return(
							<Link to={ '/' + middleUrl + '/' + item.id} key={item.id}>
								<Card data={item} />
							</Link>
						)
					})
				}
				{(
					() => {
						if(this.state.isLoading){
							return <MiniLoader />
						}
					}
				)()}
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		pagination : state.pagination
	}
}
export default connect(mapStateToProps, {fetchCharacters})(CardList);
