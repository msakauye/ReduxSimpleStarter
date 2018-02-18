import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feature extends Component {

    render() {
        return (
            <div>
                <h3>Super cool feature</h3>
                <p>This is a description of the super cool feature</p>
            </div>
        );
    }
}

export default Feature;