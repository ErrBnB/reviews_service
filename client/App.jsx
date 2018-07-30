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
    if (e !== undefined) {
      this.setState({
        currentPage: Number(e.target.id) + 1
      });
    }
  }

  handleButtonBack(e) {
    if (e !== undefined) {
      this.setState({
        currentPage: Number(e.target.id) - 1,
        currentReview: totalReview.slice(8, 15)
        // currentReview: totalReview.slice(Number(e.target.id) * 7, Number(e.target.id) * 7 + 7)
      })
    }
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
          
          {/* <div>
            {this.state.currentReview.map((x) => (
              <div key = {x['name'].toString() + Math.floor(Math.random()*9999)}>
                <img src={`https://s3-us-west-1.amazonaws.com/errbnb/${x['id'].toString().slice(-2)}.jpg`||`https://s3-us-west-1.amazonaws.com/errbnb/${x['id'].toString().slice(-2)}.jpeg`} id = "avatar"></img>
                <h3 id = 'name'>{x['name']}</h3>
                <p id = 'date'>{x['date']}</p>
                <p id = 'review'>{x['review']}</p>
                <button type="button" aria-busy="false">
                  <span>
                    Read More
                  </span>
                </button>
              </div>
            ))}
          </div> */}
          <h4>
            Page {this.state.currentPage}
          </h4>		
          <h4>
            Total Page: {this.state.totalPage}
          </h4>
          <input type = "button" id = "1" value = "<" onClick={this.handleButtonBack}></input>
          <input type = "button" id = "1" value = ">" onClick={this.handleButtonForward}></input>
        </div>
      </div>
    );
  }
}

export default App;
