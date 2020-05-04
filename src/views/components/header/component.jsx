import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchInput from '../searchInput'
import FixBottomNavigation from './bottomNavigation'
import Button from '@material-ui/core/Button';
import Logo from '../../../assets/static/marvel.svg'
import { Link } from 'react-router-dom';
import './styleMui.scss'

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	}
}));

export default function PrimarySearchAppBar() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={classes.grow}>
				<AppBar position="fixed" color="primary">
					<Toolbar>
						<span className="marvel-logo">
							<Button component={Link} to="/">
								<img src={Logo} alt="logo"/>
							</Button>
						</span>
						<SearchInput />
						<div className={classes.sectionDesktop}>
							<Button  component={Link} to="/characters" color="inherit">
								Characters
							</Button>
							<Button component={Link} to="/comics" color="inherit">
								Comics
							</Button>
							<Button component={Link} to="/series" color="inherit">
								Series
							</Button>
						</div>
					</Toolbar>
				</AppBar>
			</div>
			<FixBottomNavigation />
		</React.Fragment>
	);
}
