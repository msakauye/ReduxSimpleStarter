import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
    componentWillMount() {
        this.props.fetchFeature();
    }

    render() {
        return (
            <div>
                <h3>Super cool feature</h3>
                <p>This is a description of the super cool feature</p>
                <p>{this.props.feature}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        feature: state.feature
    };
}

export default connect(mapStateToProps, actions)(Feature);