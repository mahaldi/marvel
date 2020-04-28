import React from 'react'


const ContainerPage = ({className, children}) => {
	return(
		<React.Fragment>
			<div className={`hero-body ` + className}>
				<div className="container has-text-centered">
					{ children }
				</div>
			</div>
		</React.Fragment>
	)
}
export default ContainerPage
