import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_CORPSE_SERVER_BASE_URL;

const getAllContacts = async () => {
    try {
        const response = await axios.get(SERVER_URL + '/api/chat/contacts');
        const { success, errorMessage, data } = response.data;

        return {
            data,
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

const getAllMessagesByContactId = async ({ id }) => {
    try {
        const response = await axios.get(SERVER_URL + `/api/chat/contact/${id}/messages`);
        let { success, errorMessage, data } = response.data;
        data = Array.isArray(data) ? data : [];

        return {
            data,
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

const sendMessage = async (payload) => {
    try {
        const response = await axios.post(SERVER_URL + '/api/chat/send-message', payload);
        const { success, errorMessage, data: {message} } = response.data;

        return {
            data: message,
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

export { 
    getAllContacts,
    getAllMessagesByContactId,
    sendMessage
};