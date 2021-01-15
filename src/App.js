import React, { Component } from 'react';
import Button from './components/Button';
import './styles/button.css';
import './styles/typography.css';
import './styles/main.css';


class CounterApp extends Component {
	constructor() {
		super();
		this.state = { count: 0 };
	}

	incrementCount = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	decrementCount = () => {
		this.setState({
			count: this.state.count - 1
		})
	}
	render() {
		let { count } = this.state;
		return (
			<div>
				<span className = 'hg-inln'>Count:</span>
				<span className = 'hg-inln'> { count } </span><br />
				<Button title = { '-' } task = { this.decrementCount } />
				<Button title = { '+' } task = { this.incrementCount } />
			</div>
		);
	}
	
}

export default CounterApp;
