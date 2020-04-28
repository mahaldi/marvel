import React from "react";
import './style.scss';
import Logo from '../../../assets/static/marvel.svg'
import SearchInput from '../../components/searchInput'
import { Link } from 'react-router-dom'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import Comic from '../../../assets/static/comic.svg'
import SuperHero from '../../../assets/static/superhero.svg'
import Series from '../../../assets/static/series.png'
import Icon from "@material-ui/core/Icon";

const ComicIcon = (
	<Icon>
		<img src={Comic} alt="comic"/>
	</Icon>
)
const SuperHeroIcon = (
	<Icon>
		<img src={SuperHero} alt="SuperHero"/>
	</Icon>
)
const SeriesIcon = (
	<Icon>
		<img src={Series} alt="Series"/>
	</Icon>
)
class Header extends React.Component {
	lintenRouteChanging = () => {
		this.unlisten = this.props.history.listen((location, action) => {
      // console.log("on route change", location);
      // console.log("action", action);
    });
	}
	destroyLintening = () => {
		this.unlisten();
	}
	componentDidMount() {
		this.lintenRouteChanging()
	}
	componentWillUnmount() {
		this.destroyLintening();
	}
	endNavbarItem = () => {
		let items = [
			{ text : 'Home', url : '/'},
			{ text: 'Characters', url: '/characters'},
			{ text: 'Comics', url: '/comics'},
			{ text: 'Series', url: '/series'}
		]
		let { url } = this.props.match
		return items.map((item)=>{
			return (
				<a className={`navbar-item ${url === item.url ? 'is-active':''}`} href={item.url} key={item.text}>
					{item.text}
				</a>
			)
		})
	}
	render() {
		return (
			<React.Fragment>
				<nav className="navbar is-fixed-top has-background-white navbar-mws">
						<div className="container">
							<div className="navbar-brand">
								<Link className="navbar-item" to="/">
									<img src={Logo} alt="Logo" />
								</Link>
							</div>
							<div id="navbarMenuHeroB" className="navbar-menu">
								<div className="navbar-start middle">
									<div className="navbar-item">
										<SearchInput />
									</div>
								</div>
								<div className="navbar-end">
									{ this.endNavbarItem() }
								</div>
							</div>
						</div>
					</nav>
					<div className="mws-bottom-navbar">
						<BottomNavigation showLabels>
							<BottomNavigationAction label="Home" component={ Link } to="/" icon={ <HomeIcon /> } />
							<BottomNavigationAction label="Characters" component={ Link } to="/characters" icon={ SuperHeroIcon } />
							<BottomNavigationAction label="Comics" component={ Link } to="/comics" icon={ ComicIcon } />
							<BottomNavigationAction label="Series" component={ Link } to="/series" icon={ SeriesIcon } />
						</BottomNavigation>
					</div>
			</React.Fragment>
		)
	}
}

export default Header;
