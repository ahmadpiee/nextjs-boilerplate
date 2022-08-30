import * as React from 'react';
import { Layout } from '@components/global';
import { useRouter } from 'next/router';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Size } from '@components/global/template/theme';
import { localize } from '@utils/lib/formatter';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: Size.padding2XL,
        [theme.breakpoints.down('lg')]: {
            padding: Size.paddingXL,
        },
        [theme.breakpoints.down('md')]: {
            padding: Size.paddingL,
        },
        [theme.breakpoints.down('sm')]: {
            padding: Size.paddingM,
        },
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginBottom: '1rem',
        textAlign: 'center',
    },
}));

export default function OfflinePage() {
    const styles = useStyles();
    const { locale } = useRouter();

    return (
        <Layout title='Network error' className={styles.root}>
            <Grid
                direction='column'
                item
                container
                classes={{ root: styles.itemContainer }}
            >
                <Typography
                    variant='h3'
                    classes={{ root: styles.text }}
                    color='secondary'
                >
                    Ops! {localize(locale, 'offlinePWA')}
                </Typography>
            </Grid>
        </Layout>
    );
}
