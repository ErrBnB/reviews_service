import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Report extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			divStyle : {
				margin: '40px',
				border: '5px solid pink'
			},
			modal : {
				display: 'block', /* Hidden by default */
				position: 'fixed', /* Stay in place */
				left: 0,
				top: 0,
				width: '100%', /* Full width */
				height: '100%', /* Full height */
				overflow: 'auto', /* Enable scroll if needed */
			}
		}	
		this.popUp = this.popUp.bind(this);
	}

	popUp(event) {
		console.log('PoPpInG!');
		console.log(event.target.id)
		if (event.target.id == 'myBtn') {
			if (this.state.modal.display === 'none') {
				this.setState({
					modal : {
						display : 'block'
					}
				})
			} else {
				this.setState({
					modal : {
						display : 'none'
					}
				})	
			}
			console.log('???', this.state.pStyle);	
		}
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
			<div style={this.state.divStyle}>
				<p style={this.state.modal}>Get started with inline style</p>
				<button id="myBtn" onClick = {this.popUp}>Open Modal</button>
			</div>
		)
  }
}


export default Report;
