import React from "react";
import './style.scss';
import Logo from '../../../assets/static/marvel.svg'
import SearchInput from '../../components/searchInput'
import { Link } from 'react-router-dom'

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
									<div className="navbar-item has-dropdown is-hoverable">
										<div className="navbar-link">
											Theme
										</div>
										<div className="navbar-dropdown is-boxed">
											<div className="navbar-item">
												Dark Theme
											</div>
											<div className="navbar-item">
												Light Theme
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</nav>
			</React.Fragment>
		)
	}
}

export default Header;
