import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignUp extends Component {
    renderField(field) {
        const { touched, error } = field.meta;
        return (
            <fieldset className="form-group">
                <label htmlFor={field.input.name}>{field.label}</label>
                <input type={field.inputType} {...field.input} className="form-control" />
                {touched && error ? <div className="error">{error}</div> : ''}
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
                <Field
                    name="passwordConfirm"
                    label="Confirm Password:"
                    inputType="password"
                    component={this.renderField}
                />
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign Up</button>
            </form>
        );
    }

    handleFormSubmit({ email, password }) {
        this.props.signupUser(this.props.history, { email, password });
    }
}

function validate(values) {
    const errors = {};
    
    if (!values.email) {
        errors.email = 'Email must not be blank';
    }

    if (!values.password) {
        errors.password = 'Password must not be blank';
    }

    if (!values.passwordConfirm) {
        errors.passwordConfirm = 'Please confirm your password';
    }

    if (values.password !== values.passwordConfirm) {
        errors.passwordConfirm = 'Passwords must match';
    }

    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'signup',
    validate
})(
    connect(mapStateToProps, actions)(SignUp)
);