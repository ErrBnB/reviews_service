import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class AverageScore extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
			amountReview: 0,
			overallAccuracy : 0,
			overallCommunication : 0,
			overallCleanliness : 0,
			overallLocation : 0,
			overallCheckin : 0,
			overallValue : 0,
			overallScore: 0	
		};	
		this.handleAmount = this.handleAmount.bind(this);
		this.calculateAccuracy = this.calculateAccuracy.bind(this);
		const setState = this.setState.bind(this);
	}

	componentWillMount() {
		// console.log('WillMount', (this.props.total.length) ? true : false )
		// this.calculateAccuracy();
	}
	
	handleAmount() {
		// console.log('handleAmount', (this.props.total.length) ? true : false  )
		this.setState({
			amountReview: this.props.total.length
			// overallAccuracy: 
		})
	}

	calculateAccuracy() {
		let output = this.props.total.reduce(((accumulator, current) => 
			accumulator + current['accuracy']
		), 0)		
		return this.roundHalf(output/this.props.total.length);
		
	}

	calculateLocation() {
		let output = this.props.total.reduce(((accumulator, current) => 
			accumulator + current['location']
		), 0)		
		return this.roundHalf(output/this.props.total.length);
	}
	
	calculateCommunication() {
		let output = this.props.total.reduce(((accumulator, current) => 
			accumulator + current['location']
		), 0)		
		return this.roundHalf(output/this.props.total.length);
	}

	calculateCheckin() {
		let output = this.props.total.reduce(((accumulator, current) => 
			accumulator + current['checkin']
		), 0)		
		return this.roundHalf(output/this.props.total.length);
	}

	calculateCleanliness() {
		let output = this.props.total.reduce(((accumulator, current) => 
			accumulator + current['cleanliness']
		), 0)		
		return this.roundHalf(output/this.props.total.length);
	}

	calculateValue() {
		let output = this.props.total.reduce(((accumulator, current) => 
			accumulator + current['value']
		), 0)	

		output = this.roundHalf(output/this.props.total.length);
		return output;
	}

	calculateTotal() {
		 return (this.calculateAccuracy() + this.calculateLocation() 
		 + this.calculateCommunication() + this. calculateCheckin()
		 + this.calculateCleanliness() + this.calculateValue())/6
	}

	roundHalf(x) {
		return Math.round(x * 2)/2;
	}


	render() {
		return (
			<div>
				<h1 id = "mainStar">{this.props.total.length && this.calculateTotal()} stars</h1>
				<h1 id = "mainReview">{this.props.total.length} Reviews</h1>
				<p>Accuracy: {this.props.total.length && this.calculateAccuracy()}
					__________Location: {this.props.total.length && this.calculateLocation()}</p>
				<p>Communication: {this.props.total.length && this.calculateCommunication()}
				__________Checkin: {this.props.total.length && this.calculateCheckin()}</p>
				<p>Cleanliness: {this.props.total.length && this.calculateCleanliness()}
				__________Value: {this.props.total.length && this.calculateValue()}</p>
			</div>
		)
	}
}

export default AverageScore;