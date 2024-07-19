import { userRegister, userLogin } from './AuthActions';

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
                error
            }
        }
        case 'login': {
            const {data, error} = await userLogin(action.data);

            return {
                ...authData,
                user: data,
                isAuthenticated: !!data?.token,
                error
            }
        }
        case 'manual/setup': {
            return {
                ...authData,
                user: action.user,
                isAuthenticated: action.isAuthenticated
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
};
