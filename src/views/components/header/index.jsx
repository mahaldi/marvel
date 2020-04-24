import React from "react";
import './style.scss';
import Logo from '../../../assets/static/marvel.svg'
import SearchInput from '../../components/searchInput'

const Header = () => {
	return (
		<React.Fragment>
			<nav className="navbar is-fixed-top has-background-white navbar-mws">
					<div className="container">
						<div className="navbar-brand">
							<a className="navbar-item" href="/">
								<img src={Logo} alt="Logo" />
							</a>
							{/* <span className="navbar-burger burger" data-target="navbarMenuHeroB">
								<span></span>
								<span></span>
								<span></span>
							</span> */}
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

export default Header;
