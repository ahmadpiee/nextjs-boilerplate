import Cookies from 'js-cookie';
import Router from 'next/router';

export const setAuth = (data) => {
    if (typeof window === 'undefined') {
        return;
    }

    Cookies.set('token', data.jwt);

    if (Cookies.get('token')) {
        Router.reload('/');
    }
};

export const unsetAuth = () => {
    if (typeof window === 'undefined') {
        return;
    }
    Cookies.remove('token');

    Router.reload('/');
};
