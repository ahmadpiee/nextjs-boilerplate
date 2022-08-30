import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import styles from '@styles/AuthForm.module.css';
import React from 'react';
import { login } from '@redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const { error, isLoading } = useSelector((state) => state.authReducers);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(identifier, password));
        router.replace('/');
    };

    return (
        <>
            {error && <p>something wrong!</p>}
            {isLoading && <p>Loading...</p>}
            <div className={styles.auth}>
                <h1>
                    <FaUser /> Log In
                </h1>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'>Email Address</label>
                        <input
                            type='email'
                            id='email'
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <input type='submit' value='Login' className='btn' />
                </form>

                <p>
                    Don't have an account?{' '}
                    <Link href='/auth/register'>Register</Link>
                </p>
            </div>
        </>
    );
};

export default LoginPage;
