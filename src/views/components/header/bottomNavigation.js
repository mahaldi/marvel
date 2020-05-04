
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'react-router-dom'
import React from 'react'

import HomeIcon from '@material-ui/icons/Home';
import Comic from '../../../assets/static/comic.svg'
import SuperHero from '../../../assets/static/superhero.svg'
import Series from '../../../assets/static/series.png'
import Icon from "@material-ui/core/Icon";
import { withStyles } from '@material-ui/core/styles';

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
const styles = theme => ({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
		bottom: 0,
		zIndex: 99,
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
  },
})
const FixBottomNavigation = (props) => {
	let { classes } = props
	return (
		<BottomNavigation showLabels className={classes.stickToBottom}>
			<BottomNavigationAction label="Home" component={Link} to="/" icon={<HomeIcon />} />
			<BottomNavigationAction label="Characters" component={Link} to="/characters" icon={SuperHeroIcon} />
			<BottomNavigationAction label="Comics" component={Link} to="/comics" icon={ComicIcon} />
			<BottomNavigationAction label="Series" component={Link} to="/series" icon={SeriesIcon} />
		</BottomNavigation>
	)
}

// export default FixBottomNavigation
export default withStyles(styles)(FixBottomNavigation);
