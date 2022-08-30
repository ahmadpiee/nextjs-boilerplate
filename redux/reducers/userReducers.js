import storage from '@redux/storage';
import * as types from '@redux/actions/userAction';

const initialState = {
    isLogged: false,
    isLoading: false,
    error: null,
    userInfo: {},
    itinerary: '',
    role: '',
};

export const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERINFO_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case types.GET_USERINFO_SUCCESS:
            return {
                ...state,
                isLogged: true,
                isLoading: false,
                userInfo: action.payload,
                itinerary: action.payload.itinerary_service.descriptions,
                role: action.payload.role.name,
            };
        case types.GET_USERINFO_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const userPersistConfig = {
    key: 'user',
    storage: storage,
    blacklist: ['error'],
};
