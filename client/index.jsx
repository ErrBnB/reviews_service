import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentReview: [],
			currentPage: 1
		};
		this.handleButtonBack = this.handleButtonBack.bind(this);
		this.handleButtonForward = this.handleButtonForward.bind(this);
		this.getOnePage = this.getOnePage.bind(this);
	}

	componentDidMount() {
		this.getOnePage(1);
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

	getOnePage(param) {
		axios.get(`/api/reviews/${param}`)
			// .then(results => console.log('1', results.data[0]['name']))
		  .then(results => this.setState({currentReview : results.data[0]}))
			// .then(()=>console.log('2', self.state.currentReview))
			.catch(error => console.log('FeTcHiNg error: ', error))
	}


	page1() {
		return (
			<div>
				<h3>Jenn Skywalker</h3>
				<p>April 2018</p>
				<p>Execute order 68</p>
				<h4>Page 1</h4>
				<input type = "button" id = "1" value = "<" onClick={this.handleButtonBack}></input>
				<input type = "button" id = "1" value = ">" onClick={this.handleButtonForward}></input>
			</div>
		)
	}

	page2() {
		return(
			<div>
				<h3>Chad Bromance</h3>
				<p>March 2017</p>
				<p>This is such a nice room bro</p>
				<h4>Page 2</h4>
				<input type = "button" id = "2" value = "<" onClick={this.handleButtonBack}></input>
				<input type = "button" id = "2" value = ">" onClick={this.handleButtonForward}></input>
			</div>
		)
	}

	page3() {
		return(
			<div>	
				<h3>{this.state.currentReview['name']}</h3>
				<p>{this.state.currentReview['date']}</p>
				<p>{this.state.currentReview['review']}</p>
				<p>accuracy: </p><p>{this.state.currentReview['accuracy']}</p>
				<p>communication: </p><p>{this.state.currentReview['communication']}</p>
				<p>cleanliness: </p><p>{this.state.currentReview['cleanliness']}</p>
				<p>location: </p><p>{this.state.currentReview['location']}</p>
				<p>checkin: </p><p>{this.state.currentReview['checkin']}</p>
				<p>value: </p><p>{this.state.currentReview['value']}</p>
				<h4>Page 3</h4>		
				<input type = "button" id = "3" value = "<" onClick={this.handleButtonBack}></input>
				<input type = "button" id = "3" value = ">" onClick={this.handleButtonForward}></input>
			</div>
		)		
	}


	render() {
		if (this.state.currentPage === 1) {
			return this.page1();
		} else if (this.state.currentPage === 2) {
			return this.page2();
		} else if (this.state.currentPage === 3) {
			return this.page3();
		}
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

