import {userRegister, userLogin} from './AuthActions';

export const authDefaultValues = {
    userData: {},
    loading: true,
    authenticated: false,
    error: null
};

export async function authReducer(authData, action) {
    switch (action.type) {
        case 'register': {
            const {data, error} = await userRegister(action.data);

            return {
                ...authData,
                userData: data,
                authenticate: !!error,
                loading: !!data,
                error: error ? error : {message: 'An error occurred'}
            }
        }
        case 'login': {
            const {data, error} = await userLogin(action.data);

            return {
                ...authData,
                userData: data,
                authenticate: !!error,
                loading: !!data,
                error: error ? error : {message: 'An error occurred'}
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
