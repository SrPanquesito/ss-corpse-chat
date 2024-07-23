import { getAllContacts } from './ChatActions';

export const chatDefaultValues = {
    contacts: [],
    error: null
};

export async function chatReducer(prev, action) {
    switch (action.type) {
        case 'get/all/contacts': {
            const {data, error} = await getAllContacts();

            return {
                ...prev,
                contacts: data,
                error
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}