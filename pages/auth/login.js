import React from 'react';
import { FaUser } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '@styles/AuthForm.module.css';
import { login } from '@redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { userAction } from '@redux/actions/userAction';
import Cookies from 'js-cookie';
import { Layout } from '@components/global';
import { makeStyles } from '@mui/styles';
import { Button, Grid, Input, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { localize } from '@utils/lib/formatter';

const LoginPage = () => {
    const router = useRouter();
    const { locale } = useRouter();
    const classes = useStyles();
    const dispatch = useDispatch();
    const [identifier, setIdentifier] = React.useState('');
    const [password, setPassword] = React.useState('');
    const Token = Cookies.get('token');

    React.useEffect(() => {
        dispatch(userAction(Token));
    }, [dispatch, Token]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(identifier, password));
    };

    return (
        <Layout title='Beranda' className={classes.root}>
            <div className={styles.auth}>
                <h1>
                    <FaUser /> Log In
                </h1>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'>
                            {localize(locale, 'email')}
                        </label>
                        <input
                            type='email'
                            id='email'
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>
                            {localize(locale, 'password')}
                        </label>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Input type='submit' value='Login' className='btn' />
                </form>

                <Grid>
                    <Typography>Don&apos;t have an account?</Typography>
                    <Button
                        onClick={() => router.replace('/auth/register')}
                        classes={{ root: classes.button }}
                    >
                        <Typography>{localize(locale, 'register')}</Typography>
                    </Button>
                </Grid>
            </div>
        </Layout>
    );
};

export default LoginPage;

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '5rem 0',
    },
    link: {
        textDecoration: 'none',
    },
    button: {
        background: theme.palette.primary.main,
    },
}));
