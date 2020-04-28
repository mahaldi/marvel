import React from 'react'

const ErrorContent = (props) => {
	let { code, status } = props.error
	return(
		<React.Fragment>
			<div className="error-content">
				<h1 className="title">Something went wrong, or maybe the data is not available</h1>
				<p>Error : { code } { status }</p>
			</div>
		</React.Fragment>
	)
}

export default ErrorContent
