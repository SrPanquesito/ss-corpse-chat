import { getAllContacts } from './ChatActions';

export const chatDefaultValues = {
    contacts: [],
    activeContact: null,
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
        case 'set/active/contact': {
            return {
                ...prev,
                activeContact: action.activeContact
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}