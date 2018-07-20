import React from 'react';
import PropTypes from "prop-types";


export class Temperature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check = 5
        }
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.setState({
            check : this.state.check++
        })
    }

    render() {
        return (
            <div className ="temperature test">
                <h1>Testing</h1>
                <button onClick = {this.props.handleChange}></button>
                {this.state.check}
            </div>
        )
    }
}

