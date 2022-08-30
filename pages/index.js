import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';

const HomePage = () => {
    return (
        <Grid>
            <Typography>Home Page</Typography>
            <Button>
                <Link href='/auth/login'>Login</Link>
            </Button>
        </Grid>
    );
};

export default HomePage;
