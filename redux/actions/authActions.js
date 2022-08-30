export const GET_AUTH_REQUEST = 'GET_AUTH_REQUEST';
export const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS';
export const GET_AUTH_FAIL = 'GET_AUTH_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';

import Proxy, { endPoint } from '@redux/Proxy';
import Cookies from 'js-cookie';
import { setUser, unsetUser } from '@utils/helpers/auth';

export const login = (identifier, password) => (dispatch) => {
    dispatch({
        type: GET_AUTH_REQUEST,
    });
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    Proxy.post(endPoint.login, { identifier, password }, config)
        .then(({ data }) => {
            dispatch({
                type: GET_AUTH_SUCCESS,
                payload: data,
            });
            setUser(data);
        })
        .catch((error) => {
            dispatch({
                type: GET_AUTH_FAIL,
                payload: error.message,
            });
        });
};

export const logout = () => (dispatch) => {
    dispatch({
        type: USER_LOGOUT,
    });
    unsetUser();
};

export const getUserFromLocalCookie = () => {
    return Cookies.get('username');
};

export const getTokenFromLocalCookie = () => {
    return Cookies.get('jwt');
};
