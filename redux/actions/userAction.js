export const GET_USERINFO_REQUEST = 'GET_USERINFO_REQUEST';
export const GET_USERINFO_SUCCESS = 'GET_USERINFO_SUCCESS';
export const GET_USERINFO_FAIL = 'GET_USERINFO_FAIL';

import Proxy, { endPoint } from '@redux/Proxy';
import { setUserInfo } from '@utils/helpers/userCookie';

export const userAction = (Token) => () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Token}`,
        },
    };
    Proxy.get(endPoint.userInfo, config)
        .then(({ data }) => {
            setUserInfo(data);
        })
        .catch((error) => {
            console.log('error in userAction: ', error);
        });
};
