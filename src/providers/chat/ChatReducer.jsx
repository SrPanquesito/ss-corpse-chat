import { getAllContacts, sendMessage } from './ChatActions';

export const chatDefaultValues = {
    contacts: [],
    activeContact: null,
    selectedEmoji: '',
    successMessage: '',
    error: null
};

export async function chatReducer(prev, action) {
    switch (action.type) {
        case 'http/getAllContacts': {
            const {data, error} = await getAllContacts();

            return {
                ...prev,
                contacts: data,
                error
            };
        }
        case 'http/sendMessage': {
            const {data, error} = await sendMessage(action.payload);

            return {
                ...prev,
                successMessage: data,
                error
            };
        }
        case 'set/active/contact': {
            return {
                ...prev,
                activeContact: action.activeContact
            };
        }
        case 'set/selected/emoji': {
            return {
                ...prev,
                selectedEmoji: new String(action.selectedEmoji)
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}