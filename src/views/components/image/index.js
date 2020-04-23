import React from 'react'

const Image = (props) => {
	let { src, size, ext, alt, className } = props
	src = src.replace(/^http:\/\//i, 'https://')
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
