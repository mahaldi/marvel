import React from 'react'
import './style.scss'
class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value : ''
		}
	}
	static defaultProps = {
		placeholder : 'Search Spider'
	}
	_onChange = (e) => {
		this.setState({
			value: e.target.value
		})
	}
	render() {
		let { value } = this.state
		let { placeholder } = this.props
		return (
			<React.Fragment>
				<input type="text" className="mws-input" value={value} placeholder={placeholder} onChange={this._onChange}/>
			</React.Fragment>
		)
	}
}

export default Input
