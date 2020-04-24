import React from 'react'
import './style.scss'
import Input from '../../elements/input'
import CardHorizontalMini from '../cardHorizontalMini'
import IndexApi from '../../../apis'
import { setOverlay } from '../../../actions/systems'
import { connect } from 'react-redux'
class SearchInput extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			value: '',
			characters: [],
			comics: [],
			series: [],
			isFocus: false
		}
	}

	getCharacters = async (value) => {
		await IndexApi._getCharacters({nameStartsWith: value, limit: 3 }).then((res)=>{
			this.setState({
				characters: res.data.data.results
			})
		})
	}
	getComics = async (value) =>{
		await IndexApi._getComics({titleStartsWith: value, limit: 3}).then((res)=>{
			this.setState({
				comics: res.data.data.results
			})
		})
	}
	getSeries = async (value) => {
		await IndexApi._getSeries({titleStartsWith: value, limit: 3}).then((res)=>{
			this.setState({
				series: res.data.data.results
			})
		})
	}
	onSearch = (value) => {
		this.setState({ value })
		if(value.length > 0) {
			this.getCharacters(value)
			this.getComics(value)
			this.getSeries(value)
		}
	}
	onFocus = (value) => {
		this.setState({
			isFocus: value
		})
		this.props.setOverlay(value)
	}
	_renderItem = ( payload=null ) =>{
		if( !payload ) return null
		return payload.map((item)=>{
			return (
				<div className="search-item" key={item.id}>
						<CardHorizontalMini data={item}/>
				</div>
			)
		})
	}
	checkingState = () => {
		let { value, isFocus } = this.state
		let val = value.length < 1 || !isFocus
		return val
	}
	renderSearchList = () => {
		let { characters, comics, series } = this.state
		return (
			<div className={`search-list ${ this.checkingState() ? 'hide':''}`}>
				<div className="item-section">
					<p className="title">Characters</p>
					{ this._renderItem(characters) }
				</div>
				<div className="item-section">
					<p className="title">Comics</p>
					{ this._renderItem(comics) }
				</div>
				<div className="item-section">
					<p className="title">Series</p>
					{ this._renderItem(series) }
				</div>
			</div>
		)
	}
	render() {
		return (
			<React.Fragment>
				<Input onSearch={this.onSearch} onFocus={this.onFocus}/>
				{ this.renderSearchList() }
			</React.Fragment>
		)
	}
}

export default connect(null, { setOverlay })(SearchInput)
