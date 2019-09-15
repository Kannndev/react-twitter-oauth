import actionTypes from './../actions/actionTypes';

const initialState = {
    isAuthenticated: false,
    username: '',
    userDetails: {},
    token: '',
    followersList: [],
    isUserDetailFetchError: false,
    userDetailFetchError: null,
    loading: false
};

const reducer = (state = initialState, { type, payload }) => {
    let newState = { ...state };
    switch (type) {
        case actionTypes.ON_LOGIN: {
            newState.isAuthenticated = payload.isAuthenticated;
            newState.username = payload.user.username;
            newState.token = payload.token;
            break;
        }
        case actionTypes.ON_LOGOUT: {
            newState = { ...initialState };
            break;
        }
        case actionTypes.SET_USER_DETAILS: {
            newState.userDetails = { ...payload.userDetails };
            newState.followersList = [...payload.followersList.users];
            break;
        }
        case actionTypes.SET_USER_DETAIL_ERROR: {
            newState.isUserDetailFetchError = true;
            newState.userDetailFetchError = payload.error;
            break;
        }
        case actionTypes.UPDATE_SPINNER: {
            newState.loading = payload;
            break;
        }
        default: {
            break;
        }
    }
    return newState;
}

export default reducer;