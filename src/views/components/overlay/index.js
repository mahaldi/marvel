import React from 'react'
import { connect } from 'react-redux';
import './style.scss'

class Overlay extends React.Component {
	render() {
		let { isOverlay } = this.props
		if( !isOverlay ) return null
		return <div className="mws-overlay"></div>;
	}
}
const mapStateToProps = (state) =>{
	return {
		isOverlay: state.systems.isOverlay
	}
}
export default connect(mapStateToProps, {})(Overlay)
