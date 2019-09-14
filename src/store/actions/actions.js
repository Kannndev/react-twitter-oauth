import actionTypes from './actionTypes';
const axios = require('axios');

export const onLogin = (payload) => {
    return { type: actionTypes.ON_LOGIN, payload };
}

export const onLogout = () => {
    return { type: actionTypes.ON_LOGOUT };
}

export const setUserDetails = (payload) => {
    return { type: actionTypes.SET_USER_DETAILS, payload };
}

export const setUserDetailError = (payload) => {
    return { type: actionTypes.SET_USER_DETAIL_ERROR, payload };
}

export const updateSpinner = (payload) => {
    return { type: actionTypes.UPDATE_SPINNER, payload };
}

export const getUserDetails = (username) => {
    return (dispatch) => {
        dispatch(updateSpinner(true));
        try {
            axios.all([
                axios.get(`http://localhost:4000/api/v1/getUserDetails/${username}`),
                axios.get(`http://localhost:4000/api/v1/getFollwersList/${username}`)
            ]).then(axios.spread(function (userDetails, followersList) {
                dispatch(setUserDetails({
                    userDetails: userDetails['data'],
                    followersList: followersList['data']
                }));
                dispatch(updateSpinner(false));
            }));
        } catch (error) {
            dispatch(setUserDetailError({ error }));
        }
    }
}