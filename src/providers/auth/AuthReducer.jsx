export const authDefaultValues = {
};

export function authReducer(data, action) {
    switch (action.type) {
        case 'register': {
            return {
                ...data
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}