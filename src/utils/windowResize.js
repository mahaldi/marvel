// import { useEffect, useState } from 'react'

const onResize = (callback) => {
	let w,h
	if(window.innerWidth !== undefined && window.innerHeight !== undefined) {
    w = window.innerWidth;
    h = window.innerHeight;
  } else {
    w = document.documentElement.clientWidth;
    h = document.documentElement.clientHeight;
	}
	return {w,h}
}
export default () => {
	// const [width, setWidth] = useState(0);

	// useEffect(() => {
  //   window.addEventListener('resize', onResize())
	// }, []);

	return onResize()
}
