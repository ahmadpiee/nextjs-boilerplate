import * as types from '@redux/actions/authActions';

const initialState = {
    isLogged: false,
    isLoading: null,
    error: null,
};

export const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_AUTH_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case types.GET_AUTH_SUCCESS:
            return {
                ...state,
                error: null,
                isLogged: true,
                isLoading: false,
            };
        case types.GET_AUTH_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case types.USER_LOGOUT:
            return {
                isLoading: false,
            };
        default:
            return state;
    }
};
