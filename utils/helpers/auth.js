import Cookies from 'js-cookie';
import Router from 'next/router';

export const setUser = (data) => {
    if (typeof window === 'undefined') {
        return;
    }
    Cookies.set('id', data.user.id);
    Cookies.set('username', data.user.username);
    Cookies.set('token', data.jwt);
    Cookies.set('title', data.user.title);
    Cookies.set('fullname', data.user.fullName);
    Cookies.set('email', data.user.email);
    Cookies.set('phoneNumber', data.user.phoneNumber);
    Cookies.set('passportDateActive', data.user.passportDateActive);
    Cookies.set('passportExpired', data.user.passportExpired);
    Cookies.set('NIK', data.user.NIK);
    Cookies.set('passportNumber', data.user.passportNumber);
    Cookies.set('citizen', data.user.citizen);
    Cookies.set('occupation', data.user.occupation);

    if (Cookies.get('username')) {
        Router.reload('/');
    }
};

export const unsetUser = () => {
    if (typeof window === 'undefined') {
        return;
    }
    Cookies.remove('id');
    Cookies.remove('username');
    Cookies.remove('token');
    Cookies.remove('title', data.user.title);
    Cookies.remove('fullname', data.user.fullName);
    Cookies.remove('email', data.user.email);
    Cookies.remove('phoneNumber', data.user.phoneNumber);
    Cookies.remove('passportDateActive', data.user.passportDateActive);
    Cookies.remove('passportExpired', data.user.passportExpired);
    Cookies.remove('NIK', data.user.NIK);
    Cookies.remove('passportNumber', data.user.passportNumber);
    Cookies.remove('citizen', data.user.citizen);
    Cookies.remove('occupation', data.user.occupation);

    Router.reload('/');
};
