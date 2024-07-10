import {registerUser} from './AuthActions';

export const authDefaultValues = {
    userData: {},
    loading: true,
    authenticated: false,
    error: null
};

export async function authReducer(authData, action) {
    switch (action.type) {
        case 'register': {
            const responseData = await registerUser(action.data);
            return {
                ...authData,
                ...responseData
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
