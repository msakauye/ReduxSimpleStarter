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
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }

    handleFormSubmit({ email, password }) {
        this.props.signinUser(this.props.history, { email, password });
    }
}



export default reduxForm({
    form: 'signin'
})(
    withRouter(connect(null, actions)(SignIn))
);