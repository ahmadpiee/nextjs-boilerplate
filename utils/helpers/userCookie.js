import Cookies from 'js-cookie';

export const setUserInfo = (data) => {
    if (typeof window === 'undefined') {
        return;
    }
    Cookies.set('id', data.id);
    Cookies.set('username', data.username);
    Cookies.set('title', data.title);
    Cookies.set('fullname', data.fullName);
    Cookies.set('email', data.email);
    Cookies.set('phoneNumber', data.phoneNumber);
    Cookies.set('passportDateActive', data.passportDateActive);
    Cookies.set('passportExpired', data.passportExpired);
    Cookies.set('NIK', data.NIK);
    Cookies.set('passportNumber', data.passportNumber);
    Cookies.set('citizen', data.citizen);
    Cookies.set('occupation', data.occupation);
    Cookies.set('role', data.role.name);
    Cookies.set('avatar', data.avatar.url);
};

export const unsetUserInfo = () => {
    if (typeof window === 'undefined') {
        return;
    }

    Cookies.remove('id', data.id);
    Cookies.remove('username', data.username);
    Cookies.remove('title', data.title);
    Cookies.remove('fullname', data.fullName);
    Cookies.remove('email', data.email);
    Cookies.remove('phoneNumber', data.phoneNumber);
    Cookies.remove('passportDateActive', data.passportDateActive);
    Cookies.remove('passportExpired', data.passportExpired);
    Cookies.remove('NIK', data.NIK);
    Cookies.remove('passportNumber', data.passportNumber);
    Cookies.remove('citizen', data.citizen);
    Cookies.remove('occupation', data.occupation);
    Cookies.remove('role', data.role.name);
    Cookies.remove('avatar', data.avatar.url);
};
