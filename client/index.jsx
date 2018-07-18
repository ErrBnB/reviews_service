import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			review: 0,
			currentPage: 0
		};
		this.handleButtonBack = this.handleButtonBack.bind(this);
		this.handleButtonForward = this.handleButtonForward.bind(this);
	}

	componentDidMount() {
		this.handleButtonForward();
		this.handleButtonForward();
	}

	handleButtonForward(e) {
		if (e !== undefined) {
			console.log(e.target.id);
			this.setState({
				currentPage: Number(e.target.id) + 1
			})
		}
	}

	handleButtonBack(e) {
		if (e !== undefined) {
			console.log(e.target.id);
			this.setState({
				currentPage: Number(e.target.id) - 1
			})
		}
	}


	page0() {
		return (
			<div>
				<h3>Jenn Skywalker</h3>
				<p>April 2018</p>
				<p>Execute order 68</p>
				<h4>Page 0</h4>
				<input type = "button" id = "0" value = "<" onClick={this.handleButtonBack}></input>
				<input type = "button" id = "0" value = ">" onClick={this.handleButtonForward}></input>
			</div>
		)
	}

	page1() {
		return(
			<div>
				<h3>Chad Bromance</h3>
				<p>March 2017</p>
				<p>This is such a nice room bro</p>
				<h4>Page 1</h4>
				<input type = "button" id = "1" value = "<" onClick={this.handleButtonBack}></input>
				<input type = "button" id = "1" value = ">" onClick={this.handleButtonForward}></input>
			</div>
		)
	}


	render() {
		if (this.state.currentPage === 0) {
			return this.page0();
		} else if (this.state.currentPage === 1) {
			return this.page1();
		}
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

