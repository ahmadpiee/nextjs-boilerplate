export const GET_AUTH_FAIL = 'GET_AUTH_FAIL';

import Proxy, { endPoint } from '@redux/Proxy';
import { setAuth, unsetAuth } from '@utils/helpers/authCookie';
import { unsetUserInfo } from '@utils/helpers/userCookie';

export const login = (identifier, password) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    Proxy.post(endPoint.login, { identifier, password }, config)
        .then(({ data }) => {
            setAuth(data);
        })
        .catch((error) => {
            dispatch({
                type: GET_AUTH_FAIL,
                payload: error.message,
            });
        });
};

export const logout = () => {
    unsetAuth();
    unsetUserInfo();
    return {};
};
