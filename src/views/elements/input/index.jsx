import React from 'react'
import './style.scss'
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

	inputRoot: {
		color: 'inherit',
		width: '100%'
		},
		inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		},
})

class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value : '',
			isFocus: false
		}
	}
	static defaultProps = {
		placeholder: 'Search spider',
		onFocus: function(){},
		onClick: function(){}
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
	_onClick = () => {
		this.props.onClick(true)
	}
	render() {
		let { placeholder } = this.props
		const { classes } = this.props;
		return (
			<React.Fragment>
					<InputBase
						placeholder={placeholder}
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						onFocus={this._onFocus}
						onBlur={this._onFocus}
						onChange={this._onChange}
						onClick={this._onClick}/>
			</React.Fragment>
		)
	}
}

// export default Input
export default withStyles(styles)(Input);
