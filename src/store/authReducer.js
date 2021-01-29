import * as Types from './actionTypes';

const init = {
    user: {},
    messages: {
        error: null,
        success: null
    }
};

const authReducer = (state = init, { type, payload }) => {
    switch(type) {
        case Types.AUTH_STATE: return {...state, user: payload.user, messages: {success: payload.success}};
        case Types.SIGN_IN: return {...state, user: payload.user};
        case Types.LOG_IN: return {...state, user: payload.user};
        case Types.ERROR: return {...state, messages: {error: payload.error}};
        case Types.SUCCESS: return {...state, messages: {success: payload.success}};
        default: return state;
    }
};

export default authReducer;