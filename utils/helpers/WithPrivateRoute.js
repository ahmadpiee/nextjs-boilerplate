import React from 'react';
import { useRouter } from 'next/router';
import { NextShield } from 'next-shield';
import { LoadingCircle } from '@components/atoms';
import Cookies from 'js-cookie';

export default function WithPrivateRoute({ children }) {
    const router = useRouter();
    const [isAuth, setIsAuth] = React.useState(false);
    const role = Cookies.get('role');
    React.useEffect(() => {
        if (role) {
            setIsAuth(true);
        }
    }, [role]);

    console.log('ROLE:', role);
    console.log(isAuth, 'AUTH');

    const shieldProps = {
        router,
        isAuth: isAuth,
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
