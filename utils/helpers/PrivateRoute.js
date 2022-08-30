import React from 'react';
import { useRouter } from 'next/router';
import { NextShield } from 'next-shield';
import { useSelector } from 'react-redux';
import { LoadingCircle } from '@components/atoms';

export function PrivateRoute({ children }) {
    const router = useRouter();
    const { role, isLogged } = useSelector((state) => state.userReducers);

    console.log('ROLE:', role);

    const shieldProps = {
        router,
        isAuth: isLogged,
        isLoading: false,
        privateRoutes: ['/admin', '/agent', '/user', '/user/[id]'],
        publicRoutes: [''],
        hybridRoutes: ['/whislist'],
        loginRoute: '/auth/login',
        LoadingComponent: <LoadingCircle />,
        RBAC: {
            Authenticated: {
                grantedRoutes: ['/user', '/admin', '/agent', '/'],
                accessRoute: '/user',
            },
            TourLeader: {
                grantedRoutes: ['/profile', '/dashboard'],
                accessRoute: '/profile',
            },
        },
        userRole: role, // Must be undefined when isAuth is false & defined when is true
    };

    return <NextShield {...shieldProps}>{children}</NextShield>;
}
