import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import halfStar from '../public/halfstar.png';
// import fullstar from '../public/fullstar.png';
// import nostar from '../public/nostar.png';

class Page extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
		return (
			<div>
				<h4>
					Page {this.props.currentPage}
				</h4>		
				<h4>
					Total Page: {this.props.totalPage}
				</h4>
				{this.props.pageNumPre(this.props.currentPage)}
				<input type = "button" className = 'currentBtn' value = {this.props.currentPage}></input>
				{this.props.pageNumPost(this.props.currentPage)}
				{/* <input type = "button" className = 'changePageBtn' id = {this.props.currentPage} value = ">" onClick={()=>this.props.handleButtonForward(this.props.currentPage)}></input> */}
			</div>
		)
  }

}

export default Page;
