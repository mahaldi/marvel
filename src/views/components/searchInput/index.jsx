import React from 'react'
import './style.scss'
import Input from '../../elements/input'
import CardHorizontalMini from '../cardHorizontalMini'
import IndexApi from '../../../apis'
import { setOverlay } from '../../../actions/systems'
import { connect } from 'react-redux'
import Drawer from '@material-ui/core/Drawer';
import MediaQuery from 'react-responsive'
import WindowSize from '../../../utils/windowResize'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class SearchInput extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			value: '',
			characters: [],
			comics: [],
			series: [],
			isFocus: false,
			isOpen: false
		}
	}

	getCharacters = async (value) => {
		let res = await IndexApi._getCharacters({nameStartsWith: value, limit: 3 })
		this.setState({
			characters: res.data.data.results
		})
	}
	getComicsByCharacter = async (value) =>{
		let res = await IndexApi._getComics({titleStartsWith: value, limit: 3})
		this.setState({
			comics: res.data.data.results
		})
	}
	getSeriesByCharacter = async (value) => {
		let res = await IndexApi._getSeries({titleStartsWith: value, limit: 3})
		this.setState({
			series: res.data.data.results
		})
	}
	onSearch = (value) => {
		this.setState({ value })
		if(value.length > 0) {
			this.getCharacters(value)
			this.getComicsByCharacter(value)
			this.getSeriesByCharacter(value)
		}
	}
	onFocus = (value) => {
		this.setState({
			isFocus: value
		})
		if(WindowSize().w >= 1024)
			this.props.setOverlay(value)
	}
	_renderItem = ( payload=null, title ) =>{
		if( !payload ) return null
		return payload.map(( item, idx )=>{
			return (
				<div className="item-section" key={idx}>
					{ idx === 0 && <p className="title">{ title }</p> }
					<div className="search-item" key={item.id}>
							<CardHorizontalMini data={item}/>
					</div>
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
			<React.Fragment>
				<div className={`search-list ${ this.checkingState() ? 'hide':''}`}>
					{ this._renderItem(characters, 'Characters') }
					{ this._renderItem(comics, 'Comics') }
					{ this._renderItem(series, 'Series') }
				</div>
			</React.Fragment>
		)
	}
	toggleDrawer = (isOpen) =>  (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
		}
		this.setState({
			isOpen
		})
	}
	drawerSearchList = () => {
		return (
			<Drawer anchor="bottom" height="100%" open={this.state.isOpen} onClose={this.toggleDrawer(false)}>
				<div className="search-list-top">
					<button onClick={ () => this.onClick(false) }><ArrowBackIcon /></button>
					<Input onSearch={this.onSearch} />
				</div>
				{ this.renderSearchList() }
			</Drawer>
		)
	}
	onClick = (val) => {
		if(WindowSize().w < 1024)
			this.setState({
				isOpen: val
			})
	}
	render() {
		return (
			<React.Fragment>
				<Input onSearch={this.onSearch} onFocus={this.onFocus} onClick={this.onClick}/>
				<MediaQuery minDeviceWidth={1024}>
					{ this.renderSearchList() }
				</MediaQuery>
				<MediaQuery maxDeviceWidth={1023}>
					{ this.drawerSearchList() }
				</MediaQuery>
			</React.Fragment>
		)
	}
}

export default connect(null, { setOverlay })(SearchInput)
