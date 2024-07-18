import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_CORPSE_SERVER_BASE_URL;

const userRegister = async (payload) => {
    try {
        const response = await axios.post(SERVER_URL + '/api/auth/register', payload);
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
        return {
            data: {},
            error: error?.response?.data || error
        };
    }
}

const userLogin = async(payload) => {
    try {
        const response = await axios.post(SERVER_URL + '/api/auth/login', payload)
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
        return {
            data: {}, 
            error: error?.response?.data || error
        };
    }
}

export { userRegister, userLogin };