import { getAllContacts, getAllMessagesByContactId, sendMessage } from './ChatActions';

export const chatDefaultValues = {
    contacts: [],
    activeContact: null,
    activeMessages: [],
    lastMessageSent: null,
    selectedEmoji: '',
    error: null
};

export async function chatReducer(prev, action) {
    switch (action.type) {
        case 'http/get/contacts': {
            const {data, error} = await getAllContacts();

            return {
                ...prev,
                contacts: data,
                error
            };
        }
        case 'http/get/contact/messages': {
            const {data, error} = await getAllMessagesByContactId(action.payload);

            return {
                ...prev,
                activeMessages: data,
                error
            };
        }
        case 'http/post/send-message': {
            const {data, error} = await sendMessage(action.payload);
            if (error) return { ...prev, error };

            prev.activeMessages.unshift(data);
            return {
                ...prev,
                activeMessages: [...prev.activeMessages],
                lastMessageSent: data,
                error
            };
        }
        case 'set/activeContact': {
            return {
                ...prev,
                activeContact: action.activeContact
            };
        }
        case 'set/selectedEmoji': {
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