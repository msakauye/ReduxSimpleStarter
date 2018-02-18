import axios from 'axios';
import { 
    AUTH_USER, 
    UNAUTH_USER, 
    AUTH_ERROR,
    FETCH_FEATURE
} from './types';

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

export function signoutUser() {
    localStorage.removeItem('token');
    return {
        type: UNAUTH_USER
    };
}

export function signupUser(history, { email, password }) {
    return function(dispatch) {
        axios.post(`${API_URL}/signup`, { email, password })
            .then((response) => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                history.push('/feature');
            })
            .catch((error) => {
                dispatch(authError('Email already exists'));                
            });
    };
}

export function fetchFeature() {
    return function(dispatch) {
        axios.get(`${API_URL}`, {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })
            .then((response) => {
                dispatch({ type: FETCH_FEATURE, payload: response.data.message });
            })
            .catch((error) => {
                console.log(error);
                // dispatch(signoutUser());
            });
    }
}