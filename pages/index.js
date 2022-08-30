import React from 'react';
import { Button, Typography } from '@mui/material';
import { localize } from '@utils/lib/formatter';
import { useRouter } from 'next/router';
import { Layout } from '@components/global';

const HomePage = () => {
    const { locale } = useRouter();
    const router = useRouter();

    return (
        <Layout title={localize(locale, 'home')}>
            <Typography>{localize(locale, 'home')}</Typography>
            <Button
                onClick={() => {
                    router.replace('/auth/login');
                }}
            >
                Login
            </Button>
        </Layout>
    );
};

export default HomePage;
