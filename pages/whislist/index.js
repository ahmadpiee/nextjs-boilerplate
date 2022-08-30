import React from 'react';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import { localize } from '@utils/lib/formatter';
import { useRouter } from 'next/router';
import { Layout } from '@components/global';

const WhisListPage = () => {
    const { locale } = useRouter();

    return (
        <Layout title={localize(locale, 'whislist')}>
            <Typography>{localize(locale, 'whislist')}</Typography>
            <Button>
                <Link href='/auth/login'>Login</Link>
            </Button>
        </Layout>
    );
};

export default WhisListPage;
