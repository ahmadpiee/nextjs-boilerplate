import React from 'react';
import Cookies from 'js-cookie';

const Home = () => {
    const Token = Cookies.get('token');
    console.log('TOKEN', Token);
    return (
        <>
            <h1>Home</h1>
        </>
    );
};

export default Home;
