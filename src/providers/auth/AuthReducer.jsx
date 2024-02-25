import axios from 'axios';

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
        const response = await axios.post('http://localhost:3001/api/auth/register', data, { headers })
        return response.data;
    } catch(e) {
        throw Error(e);
    }
}