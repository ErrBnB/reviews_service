import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Search extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }
  
  search(e) {
    e.preventDefault();
    let output = [];
    // console.log(this.state.searchTerm);
    this.props.searchWord(this.state.searchTerm);
  }

  clearInput() {
    this.setState({
      searchTerm: '',
    });
  }


	render(props) {
		return (
      <div className="_11k3muyn">
        <div className="_ncmdki">
          <div className="_14o6rua0">
            <svg id = "searchBtn" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
              <path d="m10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c .3.3.8.3 1.1 0s .4-.8.1-1.1" fillRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="_178faes">
          <form className="searchField" onSubmit = {this.search}>
            <input type="text" className="_x1eveb2" id="p3-ReviewsSearchBox" name="p3-ReviewsSearchBox" placeholder="Search reviews" value={this.state.searchTerm} onChange={this.handleChange} />            
            <div data-veloute="undefined__clearButton" className="_1cyay8zu">
              <div className="_q2vo16">
                <button className="_18ah1a8i" type="button">
                  <svg id = 'searchClose' onClick={this.clearInput} viewBox="0 0 24 24" role="img" aria-label="Clear Input" focusable="false">
                    <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
	}
}

export default Search;

