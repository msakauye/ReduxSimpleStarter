import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const API_URL = 'http://localhost:3090';

export function signinUser(history, { email, password }) {
    // function(dispatch) is for redux-thunk middleware
    // just call dispatch() with the new action when you're ready
    // e.g. dispatch({ type: 'MY_TYPE', payload: { something: 'value' }})
    return function(dispatch) {
        // Submit email/password to server
        axios.post(`${API_URL}/signin`, { email, password })
            .then((response) => {
                // if request good...
                // - update state to indicate user is authenticated
                dispatch({ type: AUTH_USER });
                // - save JWT token
                localStorage.setItem('token', response.data.token);
                // - redirect to route '/feature'
                history.push('/feature');
            })
            .catch((err) => {
                // If request is bad...
                // - show an error to the user
                dispatch(authError('Bad login info'));
            });
    };
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}