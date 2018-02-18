import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SignIn extends Component {
    render() {
        return (
            <form>
                <fieldset className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" className="form-control"></input>
                </fieldset>
                <fieldset className="form-group">
                    <label htmlFor="password">Email: </label>
                    <input type="password" className="form-control"></input>
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}



export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(SignIn);