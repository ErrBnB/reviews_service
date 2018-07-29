import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Review extends React.Component {

  
  // handleMore(hiddenReview) {
  //   console.log('YAAAAA', hiddenReview);
  //   this.setState({
  //     hidden: hiddenReview
  //   })
  //   return <h1>MoRe information!!!!!!!</h1>
  // }

  readMore(review) {
    review = review.split(' ')
    let shownReview = review.slice(0, 30).join(' ');
    let hiddenReview;

    
    if (review.length > 30) {
      hiddenReview = review.slice(30).join(' ');

      return (
        <div>
          <p id = 'review'>{shownReview}</p>
          <button type="button" aria-busy="false" value={hiddenReview} onClick = {() => this.props.more(hiddenReview)}>
            {this.props.buttonTxt}
          </button>
          <p id = 'review'>{this.props.hidden}</p>
        </div>
      ) 
    } else {
      return (    
        <p id = 'review'>{shownReview}</p>
      )
    }
  }
  render(props) {
    return (
      <div>
        {this.props.total.length && this.props.current.map((x) => (
          <div key = {x.name.toString() + Math.floor(Math.random()*999)}>
            <img src={`https://s3-us-west-1.amazonaws.com/errbnb/${x.id.toString().slice(-2)}.jpg`} id = "avatar"></img>
            <h3 id = 'name'>{x.name}</h3>
            <p id = 'date'>{x.date}</p>
            {this.readMore(x.review)}
          </div>
        ))}
      </div>
    )
  }
}


export default Review;