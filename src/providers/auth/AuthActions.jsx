import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const SERVER_URL = import.meta.env.VITE_CORPSE_SERVER_BASE_URL;

const userRegister = async (payload) => {
    try {
        const response = await axios.post(SERVER_URL + '/api/auth/register', payload);
        const { token } = response.data;
        localStorage.setItem('authToken', token);

        const { user } = authStatusFromLocalStorage();

        return {
            data: {
                ...user,
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
        const { token } = response.data;
        localStorage.setItem('authToken', token);

        const { user } = authStatusFromLocalStorage();

        return {
            data: {
                ...user,
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

const authStatusFromLocalStorage = () => {
    const values = {
        user: {},
        isAuthenticated: false,
        error: null
    };
    // Retrieve live session and setup token for axios requests
    const getToken = localStorage.getItem('authToken');
    if (getToken) {
        const tokenDecode = jwtDecode(getToken);
        if (tokenDecode.exp * 1000 < Date.now()) {
            localStorage.removeItem('authToken');
        } else {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + getToken;
            values.isAuthenticated = true;
            values.user = {
                id: tokenDecode.userId,
                email: tokenDecode.email,
                username: tokenDecode.username,
                profilePictureUrl: tokenDecode.profilePictureUrl,
                status: tokenDecode.status
            }
        }
    }
    return values
}

export { userRegister, userLogin, authStatusFromLocalStorage };