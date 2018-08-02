import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './Search.jsx';


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
    // if (rate.length === 0) {
    //   output.push(<img src={"./nostar.png"} id="stars" key = {Math.floor(Math.random() * 9999)}></img>);
    //   output.push(<img src={"./nostar.png"} id="stars" key = {Math.floor(Math.random() * 9999)}></img>);
    //   output.push(<img src={"./nostar.png"} id="stars" key = {Math.floor(Math.random() * 9999)}></img>);
    //   output.push(<img src={"./nostar.png"} id="stars" key = {Math.floor(Math.random() * 9999)}></img>);
    //   output.push(<img src={"./nostar.png"} id="stars" key = {Math.floor(Math.random() * 9999)}></img>);
    // }
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
      <div style = {{paddingBottom: "16px"}}>
        <div style = {{paddingBottom: "24px"}}>
          <div id = "mainReview" style = {{display: 'inline', paddingRight: "20px"}}>{this.props.total.length} Reviews</div>
          <div id = "mainStar" style = {{display: 'inline'}}>{this.props.total.length && this.calculateStar(this.calculateTotal())}</div>
          <Search style = {{display: 'inline'}} searchWord = {this.props.searchWord} total = {this.state.totalReview}/>
        </div>
        <div id = 'reviewPrompt' style = {{marginTop: '16px', marginBottom: '16px'}}></div>
        <div>
          <p style = {{display: 'inline', paddingRight: "110px"}}>Accuracy     </p>
          <p style = {{display: 'inline', paddingRight: "30px"}}>{this.props.total.length && this.calculateStar(this.calculateAccuracy())}</p>
          <p style = {{display: 'inline', paddingRight: "100px"}}>Location     </p>
          <p style = {{display: 'inline'}}>{this.props.total.length && this.calculateStar(this.calculateLocation())}</p>
        </div>
        <div>  
          <p style = {{display: 'inline', paddingRight: "72px"}}>Communication</p>
          <p style = {{display: 'inline', paddingRight: "30px"}}>{this.props.total.length && this.calculateStar(this.calculateCommunication())}</p>
          <p style = {{display: 'inline', paddingRight: "106px"}}>Checkin      </p>
          <p style = {{display: 'inline'}}>{this.props.total.length && this.calculateStar(this.calculateCheckin())}</p>
        </div>
        <div>
          <p style = {{display: 'inline', paddingRight: "98px"}}>Cleanliness  </p>
          <p style = {{display: 'inline', paddingRight: "30px"}}>{this.props.total.length && this.calculateStar(this.calculateCleanliness())}</p>
          <p style = {{display: 'inline', paddingRight: "120px"}}>Value        </p>
          <p style = {{display: 'inline'}}>{this.props.total.length && this.calculateStar(this.calculateValue())}</p>
        </div>
      </div>
    )
  }
}

export default AverageScore;