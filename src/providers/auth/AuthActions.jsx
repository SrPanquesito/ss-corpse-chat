import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_CORPSE_SERVER_BASE_URL;

async function userRegister(data) {
    try {
        const response = await axios.post(SERVER_URL + '/api/auth/register', data);
        const {token, userId} = response.data;
        localStorage.setItem('authToken', token);

        return {
            data: {
                id: userId,
                token
            },
            error: null
        };
    } catch(error) {
        return {data: {}, error: error.response.data};
    }
}

async function userLogin(data) {
    try {
        const response = await axios.post(SERVER_URL + '/api/auth/login', data)
        const {token, userId} = response.data;
        localStorage.setItem('authToken', token);

        return {
            data: {
                id: userId,
                token
            },
            error: null
        };
    } catch(error) {
        return {data: {}, error: error.response.data};
    }
}

export { userRegister, userLogin };