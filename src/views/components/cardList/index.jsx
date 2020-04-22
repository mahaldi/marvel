import React from 'react'
import Card from '../card'
import { Link } from 'react-router-dom';
import './style.scss'
import { fetchCharacters } from '../../../actions/index'
import { connect } from 'react-redux';
import MiniLoader from '../../../assets/static/miniPokeball.gif'
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
						return(
							<Link to={ '/' + item.id} key={item.id}>
								<Card data={item} />
							</Link>
						)
					})
				}
				{(
					() => {
						if(this.state.isLoading){
							return <img src={MiniLoader} alt="MiniLoader" className="mini-loader"/>
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