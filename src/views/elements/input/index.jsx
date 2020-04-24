import React from 'react'
import './style.scss'
class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value : '',
			isFocus: false
		}
	}
	static defaultProps = {
		placeholder : 'Search spider'
	}
	_onChange = (e) => {
		this.setState({
			value: e.target.value
		})
		if(this.props.onSearch)
			this.props.onSearch(e.target.value)
	}
	_onFocus = (e) => {
		let isFocus = !this.state.isFocus

		this.setState({
			isFocus
		})
		this.props.onFocus(isFocus)
	}
	render() {
		let { value } = this.state
		let { placeholder } = this.props
		return (
			<React.Fragment>
				<input
					type="text"
					className="mws-input"
					value={value}
					placeholder={placeholder}
					onFocus={this._onFocus}
					onBlur={this._onFocus}
					onChange={this._onChange}/>
			</React.Fragment>
		)
	}
}

export default Input
