import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_CORPSE_SERVER_BASE_URL;

const getAllContacts = async () => {
    try {
        const response = await axios.get(SERVER_URL + '/api/chat/contacts');
        const { contacts } = response.data;

        return {
            data: contacts,
            error: null
        };
    } catch(error) {
        if (error?.response?.data?.data?.length > 0) {
            error.message = `${error.response.data.data[0].msg} for field: ${error.response.data.data[0].path}`;
        }
        return {
            data: [],
            error
        };
    }
}

const sendMessage = async (payload) => {
    try {
        const response = await axios.post(SERVER_URL + '/api/chat/send-message', payload);
        const { message: responseMessage, id } = response.data;

        return {
            data: responseMessage,
            error: null
        };
    } catch(error) {
        if (error?.response?.data?.data?.length > 0) {
            error.message = `${error.response.data.data[0].msg} for field: ${error.response.data.data[0].path}`;
        }
        return {
            data: '',
            error
        };
    }
}

export { getAllContacts, sendMessage };