import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

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
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
        console.log(email, password);
    }
}



export default reduxForm({
    form: 'signin'
})(SignIn);