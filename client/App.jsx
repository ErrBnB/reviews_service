import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AverageScore from './AverageScore.jsx';
import Review from './Review.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReview: [],
      currentReview: [],
      currentPage: 1,
      amountReview: 0,
      totalPage: 0,
      hidden: {}
    };

    this.handleButtonBack = this.handleButtonBack.bind(this);
    this.handleButtonForward = this.handleButtonForward.bind(this);
    this.getOnePage = this.getOnePage.bind(this);
    this.getOnePage();
  }

  handleMore(hiddenReview, id) {
    this.setState({
      hidden: {
        id : hiddenReview
      }
    })
    console.log(this.state.hidden.id)
  }

  getOnePage() {
    axios.get(`/api/reviews/100`)
      // .then(results => console.log('1', results.data[0]['name']))
      .then((results) => {
        this.setState({
          totalReview: results.data,
          // amountReview: results.data.length,
          totalPage: Math.ceil(results.data.length / 7),
          currentReview: results.data.slice(0, 7),
        });
      })
      // .then(()=>console.log('2', self.state.currentReview))
      .catch(error => console.log('FeTcHiNg error: ', error))
  }

  handleButtonForward(e) {
    // console.log(this.state.currentReview);
    if (e !== undefined) {
      this.setState({
        currentPage: Number(e.target.id) + 1,
        currentReview: this.state.totalReview.slice(this.state.currentPage * 7 + 1, (this.state.currentPage + 1) * 7 + 1),
      });
    }
    console.log(this.state.currentReview);
    
  }

  handleButtonBack(e) {
    if (e !== undefined) {
      this.setState({
        currentPage: Number(e.target.id) - 1,
        currentReview: this.state.totalReview.slice((this.state.currentPage - 1) * 7 + 1, this.state.currentPage * 7 + 1),
        // currentReview: totalReview.slice(Number(e.target.id) * 7, Number(e.target.id) * 7 + 7)
      })
    }
  }

  gotoPage(e) {
    if (e !== undefined) {
      this.setState({
        currentPage: Number(e.target.id),
        currentReview: this.state.totalReview.slice(this.state.currentPage * 7 + 1, (this.state.currentPage + 1) * 7 + 1),
      })
    }
  }

  pageNumPre(e) {
    output = [];
    if (e.target.id < 5) {
      //push prefix buttons
    }
    return output;
  }

  pageNumPost(e) {
    output = [];
    if (e.target.id > this.state.totalPage - 4) {
      //push trailing buttons
    }
    return output;
  }

  render() {
    return (
      <div>
        {/* <p>{this.state.currentReview[0].review}</p> */}
        <div>
          <h2> Search Reviews</h2>
          <AverageScore total = {this.state.totalReview} />
          <Review expanded = {this.state.expanded} buttonTxt = {this.state.buttonTxt} 
          hidden = {this.state.hidden} more = {this.handleMore.bind(this)} 
          total = {this.state.totalReview} current = {this.state.currentReview} 
          cssHide = {this.state.cssHide} cssShow = {this.state.cssShow}/>
          <h4>
            Page {this.state.currentPage}
          </h4>		
          <h4>
            Total Page: {this.state.totalPage}
          </h4>
          <input type = "button" id = {this.state.currentPage} value = "<" onClick={this.handleButtonBack}></input>
          <input type = "button" id = {this.state.currentPage} value = ">" onClick={this.handleButtonForward}></input>
        </div>
      </div>
    );
  }
}

export default App;
