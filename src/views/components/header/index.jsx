import React from "react";
import './style.scss';
import Logo from '../../../assets/static/marvel.svg'
const Header = () => {
	return (
		<React.Fragment>
			<nav className="navbar is-fixed-top has-background-white">
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
						{/* <div id="navbarMenuHeroB" className="navbar-menu">
							<div className="navbar-end">
								<a className="navbar-item is-active" href="/">
									Home
                            </a>
								<a className="navbar-item" href="/">
									Examples
                            </a>
								<a className="navbar-item" href="/">
									Documentation
                            </a>
								<span className="navbar-item">
									<a className="button is-info is-inverted" href="/">
										<span className="icon">
											<i className="fab fa-github"></i>
										</span>
										<span>Download</span>
									</a>
								</span>
							</div>
						</div> */}
					</div>
				</nav>
		</React.Fragment>
	)
}

export default Header;
