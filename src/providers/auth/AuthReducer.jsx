import { userRegister, userLogin } from './AuthActions';
import { jwtDecode } from "jwt-decode";
import { useCallback } from 'react';

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

export const authDefaultValues = {
    user: {},
    isLoading: true,
    isAuthenticated: false,
    error: null
};

export const authReducer = useCallback(async (authData, action) => {
    switch (action.type) {
        // case 'update/values': {
        //     return {
        //         ...authData,
        //         user: action.data,
        //         isAuthenticated: !!action.error,
        //         isLoading: !!action.data,
        //         error: action.error ? action.error : 'An error occurred'
        //     }
        // }
        case 'register': {
            const {data, error} = await userRegister(action.data);

            return {
                ...authData,
                user: data,
                isAuthenticated: !!error,
                isLoading: !!data,
                error: error ? error : 'An error occurred'
            }
        }
        case 'login': {
            const {data, error} = await userLogin(action.data);

            return {
                ...authData,
                user: data,
                isAuthenticated: !!error,
                isLoading: !!data,
                error: error ? error : 'An error occurred'
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}, []);
