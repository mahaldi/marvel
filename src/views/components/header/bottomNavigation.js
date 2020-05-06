import { Link } from 'react-router-dom'
import React from 'react'

import Comic from '../../../assets/static/comic.svg'
import SuperHero from '../../../assets/static/superhero.svg'
import Series from '../../../assets/static/series.png'
import { withStyles } from '@material-ui/core/styles';
import history from '../../../history'
import loadable from '@loadable/component'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

const HomeIcon = loadable(() => import('@material-ui/icons/Home'))
const Icon = loadable(() => import('@material-ui/core/Icon'))

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
	let { pathname } = history.location
	return (
		<BottomNavigation showLabels value={pathname} className={classes.stickToBottom}>
			<BottomNavigationAction label="Home" value="/" component={Link} to="/" icon={<HomeIcon />} />
			<BottomNavigationAction label="Characters" value="/characters" component={Link} to="/characters" icon={SuperHeroIcon} />
			<BottomNavigationAction label="Comics" value="/comics" component={Link} to="/comics" icon={ComicIcon} />
			<BottomNavigationAction label="Series" value="/series" component={Link} to="/series" icon={SeriesIcon} />
		</BottomNavigation>
	)
}

// export default FixBottomNavigation
export default withStyles(styles)(FixBottomNavigation);
