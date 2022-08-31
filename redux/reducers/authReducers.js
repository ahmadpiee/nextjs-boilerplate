import * as types from '@redux/actions/authActions';

const initialState = {
    error: '',
};

export const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_AUTH_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
