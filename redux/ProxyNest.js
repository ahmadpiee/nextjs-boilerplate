import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_NEST;

export default axios.create({
    baseURL: API_URL,
    // withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoic3VwZXJhZG1pbjFAbWFpbC5jb20iLCJyb2xlIjoic3VwZXJBZG1pbiIsImlhdCI6MTY2MTc0NzU0NCwiZXhwIjoxNjYxOTIwMzQ0fQ.i3Qzamq1WWheZHuJc6yZyU_8eGsVtouYQF_75-VCyIk`,
    },
});

export const endPoint = {
    // -- collection types ---
    loginCust: '/auth/login/customer',
    registerCust: '/auth/register/customer',
    loginAgent: '/auth/login/agent',
    loginSuperAdmin: '/auth/login/super-admin',
    addSchedulePlan: '/schedule-plans/add',
};
