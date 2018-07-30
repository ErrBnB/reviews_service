import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReviewItem from './ReviewItem.jsx';

class Review extends React.Component {
  render(props) {
    return (
      <div>
        {this.props.total.length && this.props.current.map((reviewEntry) => (
          <ReviewItem key = {reviewEntry.name.toString() + Math.floor(Math.random() * 9999)} hidden = {this.props.hidden} more = {this.props.more.bind(this)} reviewEntry= {reviewEntry}/>
        ))}
      </div>
    )
  }
}


export default Review;