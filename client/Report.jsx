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
				padding: '20px',
				border: '1px solid #888',
				width: '80%',
				backgroundImage: "Yellow"
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
				float: 'right'
			}
		}	
		this.popUp = this.popUp.bind(this);
		this.close = this.close.bind(this);
		this.submit = this.submit.bind(this);
	}

	popUp(event) {
		console.log('PoPpInG!');
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
			}
		})
	}



  render() {
    return (
    //   <div className = 'reviewName'>
    //     {/* <button><img src="./reportBtn.png" alt="my image" onClick={this.popUp} /></button> */}
		// 		<button id="myBtn" >Open Modal</button>
		// 		<div id="myModal" onClick={this.popUp} className="modal">
		// 			<div className="modal-content">
		// 				<span className="close">&times;</span>
		// 				<p>Some text in the Modal..</p>
		// 			</div>
		// 		</div>
		// 	</div>
			<div>
				{/* <p style={this.state.modal}>Get started with inline style</p> */}
				<button id="myBtn" ><img src="./reportBtn.png" alt="my image" onClick = {this.popUp}/></button>
				<div id="myModal" className = "modal" style = {this.state.modal}>
					<div className = "modalContent" style = {this.state.modalContent}>
						<span className = "close" style = {this.state.close} onClick = {this.close}>&times;</span>
						<div>
							<h3>Do you want to anonymously report this review?</h3>
							<p>If so, please choose one of the following reasons. </p>
							<input type="checkbox" id="myCheck"/>
							<p>Inappropriate content</p>
							<p>This review contains violent, graphic, promotional, or otherwise offensive content.</p>
						</div>
						<span className = "submit" onClick = {this.submit}>Submit</span>
					</div>
				</div>
			</div>
		)
  }
}


export default Report;
