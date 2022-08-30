import axios from 'axios';

const API_URL =
    process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_LOCALHOST;

const Token = process.env.NEXT_PUBLIC_API_TOKEN;

export default axios.create({
    baseURL: API_URL,
});

export const endPoint = {
    login: `/api/auth/local`,
    userInfo: `/api/users/me?populate=*`,
};
