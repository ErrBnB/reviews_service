import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import halfStar from '../public/halfstar.png';
// import fullstar from '../public/fullstar.png';
// import nostar from '../public/nostar.png';

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

  calculateStar(rate) {
    let output = [];
    let count = 0;
    while (count < 5) {
      if (rate >= 1) {
        output.push(<img src={"./fullstar.png"} id="stars" key = {Math.floor(Math.random() * 9999)}></img>);
        rate -= 1;
        count += 1;
      } else if (rate >= 0.5) {
        output.push(<img src={"./halfstar.png"} id="stars" key = {Math.floor(Math.random() * 9999)}></img>);
        rate -= 0.5;
        count += 1;
      } else {
        output.push(<img src={"./nostar.png"} id="stars" key = {Math.floor(Math.random() * 9999)}></img>);
        count += 1;
      }
    }
    return output
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
        <h1 id = "mainStar">{this.props.total.length && this.calculateStar(this.calculateTotal())} stars</h1>
        <h1 id = "mainReview">{this.props.total.length} Reviews</h1>
        <p>Accuracy: {this.props.total.length && this.calculateStar(this.calculateAccuracy())}
          Location: {this.props.total.length && this.calculateStar(this.calculateLocation())}</p>
        <p>Communication: {this.props.total.length && this.calculateStar(this.calculateCommunication())}
          Checkin: {this.props.total.length && this.calculateStar(this.calculateCheckin())}</p>
        <p>Cleanliness: {this.props.total.length && this.calculateStar(this.calculateCleanliness())}
          Value: {this.props.total.length && this.calculateStar(this.calculateValue())}</p>
      </div>
    )
  }
}

export default AverageScore;