import { Layout } from '@components/global';
import { Button, Typography } from '@mui/material';
import { localize } from '@utils/lib/formatter';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

const RegisterPage = () => {
    const { locale } = useRouter();
    const router = useRouter();
    const classes = useStyles();

    return (
        <Layout title={localize(locale, 'register')}>
            <Grid container classes={{ root: classes.root }}>
                <Typography variant='h4' textTransform={'capitalize'}>
                    {localize(locale, 'register')}
                </Typography>
                <Button
                    classes={{ root: classes.button }}
                    onClick={() => {
                        router.replace('/auth/login');
                    }}
                >
                    back to login page
                </Button>
            </Grid>
        </Layout>
    );
};

export default RegisterPage;

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    button: {
        background: theme.palette.common.verySoftGray,
    },
}));
