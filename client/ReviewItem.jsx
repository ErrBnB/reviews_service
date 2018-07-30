import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class ReviewItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: false
		}
	};


	readMore(review) {
		review = review.split(' ')
		let shownReview = review.slice(0, 30).join(' ');
		let hiddenReview;
		
		if (review.length > 30) {
			hiddenReview = review.slice(30).join(' ');
			return (
				<div>
					<p id = 'review'>{shownReview}</p>
					{this.state.hidden ? (
						<p id = 'review'> {hiddenReview}</p>
					) : (
						<button className = "moreBtn" type="button" aria-busy="false" value={hiddenReview} onClick = {() => this.setState({hidden: true})}>
							<span>Read more</span>
						</button>
					)}
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
				<img src={`https://s3-us-west-1.amazonaws.com/errbnb/${this.props.reviewEntry.id.toString().slice(-2)}.jpg`} id = "avatar"></img>
				<h3 id = 'name'>{this.props.reviewEntry.name}</h3>
				<p id = 'date'>{this.props.reviewEntry.date}</p>
				{this.readMore(this.props.reviewEntry.review)}
			</div>
		)
	}
}
  
  
  export default ReviewItem;