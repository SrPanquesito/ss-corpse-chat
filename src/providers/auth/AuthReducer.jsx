import { userRegister, userLogin } from './AuthActions';
import { jwtDecode } from "jwt-decode";

// Retrieve live session and setup token for axios requests
const getToken = localStorage.getItem('authToken');
if (getToken) {
    const tokenDecode = jwtDecode(getToken);
    if (tokenDecode.exp * 1000 < Date.now()) {
        localStorage.removeItem('authToken');
    } else {
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + getToken;
        authDefaultValues.isAuthenticated = true;
        authDefaultValues.user = {
            id: tokenDecode.userId
        }
    }
}
console.warn(getToken);

const defaultError = {message: 'An error occurred'};

export const authDefaultValues = {
    user: {},
    isAuthenticated: false,
    error: null
};

export const authReducer = async (authData, action) => {
    switch (action.type) {
        case 'register': {
            const {data, error} = await userRegister(action.data);

            return {
                ...authData,
                user: data,
                isAuthenticated: !!data?.token,
                error: error ? error : defaultError
            }
        }
        case 'login': {
            const {data, error} = await userLogin(action.data);

            return {
                ...authData,
                user: data,
                isAuthenticated: !!data?.token,
                error: error ? error : defaultError
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
};
