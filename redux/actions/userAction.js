export const GET_USERINFO_REQUEST = 'GET_USERINFO_REQUEST';
export const GET_USERINFO_SUCCESS = 'GET_USERINFO_SUCCESS';
export const GET_USERINFO_FAIL = 'GET_USERINFO_FAIL';

import Proxy, { endPoint } from '@redux/Proxy';

export const userAction = (Token) => (dispatch) => {
    dispatch({
        type: GET_USERINFO_REQUEST,
    });
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Token}`,
        },
    };
    Proxy.get(endPoint.userInfo, config)
        .then(({ data }) => {
            dispatch({
                type: GET_USERINFO_SUCCESS,
                payload: data,
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_USERINFO_FAIL,
                payload: error.message,
            });
        });
};
