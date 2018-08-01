import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Report extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalContent : {
				margin: 'auto',
				border: '1px solid #888',
				width: '80%',
				backgroundColor: "rgb(255, 255, 255)",
				boxSizing: 'borderBox',
				padding: '32px',
				fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
    		fontSize: '14px',
    		lineHeight: 1.43,
				color: '#484848'
			},
			modal : {
				display: 'none', /* Hidden by default */
				position: 'fixed', /* Stay in place */
				left: 0,
				top: 0,
				width: '100%', /* Full width */
				height: '100%', /* Full height */
				overflow: 'auto', /* Enable scroll if needed */
			},
			close : {
				color: '#aaaaaa',
				float: 'right',
				cursor: 'pointer',
			},
			modal2 : {
				display: 'none', /* Hidden by default */
				position: 'fixed', /* Stay in place */
				left: 0,
				top: 0,
				width: '100%', /* Full width */
				height: '100%', /* Full height */
				overflow: 'auto', /* Enable scroll if needed */
			},
		}	
		this.popUp = this.popUp.bind(this);
		this.close = this.close.bind(this);
		this.submit = this.submit.bind(this);
		this.closeSubmit = this.closeSubmit.bind(this);
	}

	popUp(event) {
		console.log(event);
		this.setState({
			modal : {
				display : 'block'
			}
		})
	}

	close() {
		this.setState({
			modal : {
				display : 'none'
			}
		})
	}

	submit() {
		this.setState({
			modal : {
				display : 'none'
			},
			modal2 : {
				display : 'block'
			}
		})
	}

	closeSubmit() {
		this.setState({
			modal2 : {
				display : 'none'
			}
		})
	}



  render() {
    return (
			<div style = {{display : 'inline'}}>
				<button id="myBtn" ><img src="./reportBtn.png" alt="my image" onClick = {this.popUp}/></button>
				<div id="myModal" className = "modal" style = {this.state.modal}>
					<div className = "modalContent" style = {this.state.modalContent}>
						<span className = "close" style = {this.state.close} onClick = {this.close}>&times;</span>
						<div>
							<h3>Do you want to anonymously report this review?</h3>
							<p style = {{display : 'inline'}}>If so, please choose one of the following reasons. </p>
							<p><a href="https://www.airbnb.com/help/article/4">Learn more</a></p>
							<input type="radio" id="myCheck"/>
							<p style = {{display : 'inline'}}>Inappropriate content</p>
							<p>This review contains violent, graphic, promotional, or otherwise offensive content.</p>
							<input type="radio" id="myCheck"/>
							<p style = {{display : 'inline'}}>Dishonest or hateful content</p>
							<p>This review is purposefully malicious and assaulting.</p>
							<input type="radio" id="myCheck"/>
							<p style = {{display : 'inline'}}>Fake content</p>
							<p>This review contains false information or may be fake.</p>
						</div>
						<span className = "submit" onClick = {this.submit}>Submit</span>
					</div>
				</div>
				<div id="myModal" className = "modal2" style = {this.state.modal2}>
					<div className = "modalContent" style = {this.state.modalContent}>
						<span className = "close" style = {this.state.close} onClick = {this.closeSubmit}>&times;</span>
						<div>
							<h3>Thank you for the submision</h3>
							<p style = {{display : 'inline'}}>Please enjoy our site</p>
						</div>
					</div>
				</div>
			</div>
		)
  }
}


export default Report;
