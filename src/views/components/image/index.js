import React from 'react'

const Image = (props) => {
	let { src, size, ext, alt, className } = props
	return (
		<img src={ src + `/${size}.` + ext } alt={alt} className={className}/>
	)
}

Image.defaultProps = {
	alt: 'mws-image',
	className: '',
	size: 'portrait_incredible'
}

export default Image
