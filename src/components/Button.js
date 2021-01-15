import React, { Component } from 'react';
import '../styles/button.css';

class Button extends Component {
	render() {
		let { title, task } = this.props;
		return (
			<button className = "btn btn-primary warning" onClick = { task }>{ title }</button>
			)
	};
}

export default Button;