import React from 'react'
import './style.scss'
import Input from '../../elements/input'
import CardHorizontalMini from '../cardHorizontalMini'
import CharactersAPI from '../../../apis/characters'
import ComicsAPI from '../../../apis/comics'
import SeriesAPI from '../../../apis/series'
import { setOverlay } from '../../../actions/systems'
import { connect } from 'react-redux'
import Drawer from '@material-ui/core/Drawer';
import MediaQuery from 'react-responsive'
import WindowSize from '../../../utils/windowResize'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import compose from 'redux'
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	searchMobile: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    margin: '0 auto',
    width: '66%',
		backgroundColor: 'rgb(246, 246, 246)',
		height: '36px',
		margin: 'auto auto auto 10px'
	},
	titleItem: {
		// color: 'color: rgba(49, 53, 59, 0.96)',
		margin: '16px 0px 4px'
	},
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		[theme.breakpoints.up('md')]: {
			'&:hover': {
				backgroundColor: fade(theme.palette.common.white, 0.25),
			}
		},
    margin: '0 auto',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
	},
	drawerPaper: {
		height: '100%'
	}
})
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
		let res = await CharactersAPI.getCharacters({nameStartsWith: value, limit: 3 })
		this.setState({
			characters: res.data.data.results
		})
	}
	getComicsByCharacter = async (value) =>{
		let res = await ComicsAPI.getComics({titleStartsWith: value, limit: 3})
		this.setState({
			comics: res.data.data.results
		})
	}
	getSeriesByCharacter = async (value) => {
		let res = await SeriesAPI.getSeries({titleStartsWith: value, limit: 3})
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
		const { classes } = this.props;
		if( !payload ) return null
		return payload.map(( item, idx )=>{
			return (
				<div className="item-section" key={idx}>
					{ idx === 0 &&  <Typography variantMapping="p" color="primary" classes={{ root: classes.titleItem }}>{ title }</Typography> }
					<div className="search-item" key={item.id}>
							<CardHorizontalMini data={item}/>
					</div>
				</div>
			)
		})
	}
	checkingState = () => {
		let { value, isFocus } = this.state
		if(WindowSize().w >= 1024){
			let val = value.length < 1 || !isFocus
			return val
		}
		return value.length < 1
		
	}
	renderSearchList = () => {
		let { characters, comics, series } = this.state
		if( this.checkingState() ) return null
		return (
			<React.Fragment>
				<div className="search-list">
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
		const { classes } = this.props;
		return (
			<Drawer anchor="bottom" classes={{
				paper : classes.drawerPaper
			}} open={this.state.isOpen} onClose={this.toggleDrawer(false)}>
				<div className="search-list-top">
					<button onClick={ () => this.onClick(false) }><ArrowBackIcon /></button>
					<div className={classes.searchMobile}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
						<Input onSearch={this.onSearch} onFocus={this.onFocus} />
					</div>
					<button onClick={ () => this.onClick(false) }>Batal</button>
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
	componentDidMount() {
		this.onSearch('s')
	}
	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
					<Input onSearch={this.onSearch} onFocus={this.onFocus} onClick={this.onClick}/>
					<MediaQuery minDeviceWidth={1024}>
						{ this.renderSearchList() }
					</MediaQuery>
				</div>
				<MediaQuery maxDeviceWidth={1023}>
					{ this.drawerSearchList() }
				</MediaQuery>
			</React.Fragment>
		)
	}
}

// export default connect(null, { setOverlay })(SearchInput)
export default connect( null, { setOverlay })(withStyles(styles)(SearchInput))
