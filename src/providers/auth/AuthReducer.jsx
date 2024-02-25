import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_CORPSE_SERVER_BASE_URL;

export const authDefaultValues = {
};

export function authReducer(authData, action) {
    switch (action.type) {
        case 'register': {
            registerUser(action.data);
            return {
                ...authData
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

async function registerUser(data) {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        const response = await axios.post(SERVER_URL + '/api/auth/register', data, { headers })
        return response.data;
    } catch(e) {
        throw Error(e);
    }
}