import Skeleton from '@material-ui/lab/Skeleton';
import './style.scss'
import React from 'react'

const CardSkeleton = () => {
	return (
		<React.Fragment>
			<div className="card">
				<div className="card-content-wrap">
					<div className="card-image">
						<figure className="image is-4by3">
							<Skeleton animation="wave" variant="rect" width="100%" height={324} />
						</figure>
					</div>
					<div className="card-content">
						<Skeleton animation="wave" variant="rect" width="100%" height={10} style={{ marginBottom: 6 }} />
						<Skeleton animation="wave" variant="rect" width="100%" height={10} style={{ marginBottom: 6 }} />
						<Skeleton animation="wave" variant="rect" width="100%" height={10} />
						<div className="clear"></div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
export default CardSkeleton
