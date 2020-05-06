import Skeleton from '@material-ui/lab/Skeleton';
import './style.scss'
import React from 'react'

const CardHorizontalSkeleton = () => {

	return (
		<React.Fragment>
			<div className="mws-card-horizontal columns">
				<div className="column is-one-quarter">
					<Skeleton animation="wave" variant="rect" width="100%" height={324} />
				</div>
				<div className="column info">
					<Skeleton animation="wave" variant="rect" width="100%" height={10} style={{ marginBottom: 12 }} />
					<Skeleton animation="wave" variant="rect" width="100%" height={10} style={{ marginBottom: 12 }} />
					<Skeleton animation="wave" variant="rect" width="100%" height={10} style={{ marginBottom: 12 }} />
				</div>
			</div>
		</React.Fragment>
	)
}

export default CardHorizontalSkeleton
