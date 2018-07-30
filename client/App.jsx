import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AverageScore from './AverageScore.jsx';
import Review from './Review.jsx';
import Page from './Page.jsx';

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
    console.log(e);
    // console.log(this.state.currentReview);
    if (e !== undefined && e < this.state.totalPage) {
      this.setState({
        currentPage: Number(e) + 1,
        currentReview: this.state.totalReview.slice(this.state.currentPage * 7 + 1, (this.state.currentPage + 1) * 7 + 1),
      });
    }
    console.log(this.state.currentReview);
    
  }

  handleButtonBack(e) {
    if (e !== undefined && e > 0) {
      this.setState({
        currentPage: Number(e) - 1,
        currentReview: this.state.totalReview.slice((this.state.currentPage - 1) * 7 + 1, this.state.currentPage * 7 + 1),
        // currentReview: totalReview.slice(Number(e.target.id) * 7, Number(e.target.id) * 7 + 7)
      })
    }
  }

  gotoPage(e) {
    if (e !== undefined) {
      this.setState({
        currentPage: Number(e),
        currentReview: this.state.totalReview.slice((e - 1 ) * 7 + 1, (e) * 7 + 1),
      })
    }
  }

  pageNumPre(e) {
    let output = [];
    const totalPage = Number(this.state.totalPage);
    if (totalPage < 6) {
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = "<" onClick={()=>this.handleButtonBack(this.state.currentPage)}></input>);      
    } else if (e == 1) {
      output.push()
      //push prefix buttons
    } else {
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = "<" onClick={()=>this.handleButtonBack(this.state.currentPage)}></input>);
      if (e == 2) {
        output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = "1" onClick={()=>this.gotoPage(1)}></input>)
      } else if (e == 3) {
        output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = "1" onClick={()=>this.gotoPage(1)}></input>)
        output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = "2" onClick={()=>this.gotoPage(2)}></input>)
      } else if (e == 4) {
        output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = "1" onClick={()=>this.gotoPage(1)}></input>)
        output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = "2" onClick={()=>this.gotoPage(2)}></input>)
        output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = "3" onClick={()=>this.gotoPage(3)}></input>)
      } else if (e == this.state.totalPage) {
        output.push(<input  key = {Math.random() * 99999}type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = "1" onClick={()=>this.gotoPage(1)}></input>)
        output.push(<p key = {Math.random() * 99999} className = 'omit'>...</p>)
        output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = {this.state.currentPage - 2} onClick={()=>this.gotoPage(this.state.currentPage - 2)}></input>)
        output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = {this.state.currentPage - 1} onClick={()=>this.gotoPage(this.state.currentPage - 1)}></input>)
      } else {
        output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = "1" onClick={()=>this.gotoPage(1)}></input>)
        output.push(<p key = {Math.random() * 99999} className = 'omit'>...</p>)
        output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = {this.state.currentPage - 1} onClick={()=>this.gotoPage(this.state.currentPage - 1)}></input>)
      }
    }
    return output;
  }

  pageNumPost(e) {
    let output = [];
    const totalPage = Number(this.state.totalPage);
    if (totalPage < 6) {
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = ">" onClick={()=>this.handleButtonForward(this.state.currentPage)}></input>);
    }
    else if (e == this.state.totalPage) {
    } else if (e == (totalPage - 1)) {
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = {this.state.currentPage + 1} onClick={()=>this.gotoPage(this.state.currentPage + 1)}></input>)
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = ">" onClick={()=>this.handleButtonForward(this.state.currentPage)}></input>);
    } else if (e == (totalPage - 2)) {
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = {this.state.currentPage + 1} onClick={()=>this.gotoPage(this.state.currentPage + 1)}></input>)
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = {this.state.currentPage + 2} onClick={()=>this.gotoPage(this.state.currentPage + 2)}></input>)
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = ">" onClick={()=>this.handleButtonForward(this.state.currentPage)}></input>);
    } else if (e == (totalPage - 3)) {
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = {this.state.currentPage + 1} onClick={()=>this.gotoPage(this.state.currentPage + 1)}></input>)
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = {this.state.currentPage + 2} onClick={()=>this.gotoPage(this.state.currentPage + 2)}></input>)
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = {this.state.currentPage + 3} onClick={()=>this.gotoPage(this.state.currentPage + 3)}></input>)
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = ">" onClick={()=>this.handleButtonForward(this.state.currentPage)}></input>);
    } else if (e == 1) {
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = "2" onClick={()=>this.gotoPage(2)}></input>)
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = "3" onClick={()=>this.gotoPage(3)}></input>)
      output.push(<p key = {Math.random() * 99999} className = 'omit'>...</p>)
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = {this.state.totalPage} onClick={()=>this.gotoPage(this.state.totalPage)}></input>)
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = ">" onClick={()=>this.handleButtonForward(this.state.currentPage)}></input>);
    } else {
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = {this.state.currentPage + 1} onClick={()=>this.gotoPage(this.state.currentPage + 1)}></input>)
      output.push(<p key = {Math.random() * 99999} className = 'omit'>...</p>)
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = {this.state.totalPage} onClick={()=>this.gotoPage(this.state.totalPage)}></input>)
      output.push(<input key = {Math.random() * 99999} type = "button" className = 'changePageBtn' id = {this.state.currentPage} value = ">" onClick={()=>this.handleButtonForward(this.state.currentPage)}></input>);
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
          />
          <Page currentPage = {this.state.currentPage} totalPage = {this.state.totalPage}
          pageNumPost = {this.pageNumPost.bind(this)} pageNumPre = {this.pageNumPre.bind(this)} 
          gotoPage = {this.gotoPage.bind(this)} 
          handleButtonBack = {this.handleButtonBack.bind(this)} handleButtonForward = {this.handleButtonForward.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
