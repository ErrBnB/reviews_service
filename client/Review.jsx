import Page from './Page.jsx';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import ReviewItem from './ReviewItem.jsx';

class Review extends React.Component {

  render(props) {
    return (
      <div id = "gridReview">
        {this.props.total.length && this.props.current.map((reviewEntry) => (
          <ReviewItem key = {reviewEntry.name.toString() + Math.floor(Math.random() * 9999)} reviewEntry= {reviewEntry}/>
        ))}
      </div>
    )
  }
}


export default Review;
