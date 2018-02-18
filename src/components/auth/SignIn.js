import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignIn extends Component {
    renderField(field) {
        return (
            <fieldset className="form-group">
                <label htmlFor={field.input.name}>{field.label}</label>
                <input type={field.inputType} {...field.input} className="form-control"></input>
            </fieldset>
        );
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Something went wrong!</strong> {this.props.errorMessage}
                </div>
            )
        }
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field
                    name="email"
                    label="Email:"
                    inputType="email"
                    component={this.renderField}
                />
                <Field
                    name="password"
                    label="Password:"
                    inputType="password"
                    component={this.renderField}
                />
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }

    handleFormSubmit({ email, password }) {
        this.props.signinUser(this.props.history, { email, password });
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'signin'
})(withRouter(connect(mapStateToProps, actions)(SignIn)));