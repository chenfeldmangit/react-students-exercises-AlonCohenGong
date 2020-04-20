import * as actions from '../actions/appActions';

const initialState = {
    login: {
        name: null,
        email: null,
        loggedIn: false,
    }
};

let appReducer = function(state = initialState, action) {
    switch (action.type) {

        case actions.LOGIN:
            console.log('XXXXXXXXXX REDUCER LOGIN', state, action.payload);
            return {
                ...state,
                login: {...action.payload.loginCred},
            };
        case actions.LOGOUT:
            return {
                ...state,
                login: {},
            };
        default:
            return state;

    }
};

export default appReducer;

