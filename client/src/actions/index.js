import types from './types';
import axios from 'axios';
import { authHeaders } from '../helpers';

export const jwtSignIn = () => async dispatch => {
    try {
        const resp = await axios.get('/auth/jwt-sign-in', authHeaders());

        console.log('JWT Sign In Resp:', resp);
    } catch(err){
        console.log('Error with JWT Sign In:', err);
    }
}

export const signIn = userInfo => async dispatch => {
    try {
        const resp = await axios.post('/auth/sign-in', userInfo);

        console.log('Sign In Response:', resp);

        localStorage.setItem('token', resp.data.token);
    } catch(err){
        console.log('Error Signing In:', err);
    }
}

export const signUp = userInfo => async dispatch => {
    try {
        const resp = await axios.post('/auth/sign-up', userInfo);

        console.log('Sign Up Resp:', resp);
    } catch(err){
        console.log('Sign Up Error:', err.message);
    }
}
