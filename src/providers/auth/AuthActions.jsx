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
        if (error?.response?.data?.data?.length > 0) {
            error.message = `${error.response.data.data[0].msg} for field: ${error.response.data.data[0].path}`;
        }
        return {
            data: {},
            error
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
        if (error?.response?.data?.data?.length > 0) {
            error.message = `${error.response.data.data[0].msg} for field: ${error.response.data.data[0].path}`;
        }
        return {
            data: {}, 
            error
        };
    }
}

export { userRegister, userLogin };