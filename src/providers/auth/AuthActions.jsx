import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_CORPSE_SERVER_BASE_URL;

async function registerUser(data) {
    try {
        const response = await axios.post(SERVER_URL + '/api/auth/register', data)
        // localStorage.setItem('authToken', response.data.token);

        return {
            userData: {id: response.data.userId},
            authenticate: true,
            loading: false,
            error: null
        };
    } catch(error) {
        return {
            userData: {},
            authenticate: false,
            loading: true,
            error: error.response.data
        };
    }
}

export { registerUser };