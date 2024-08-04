import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_CORPSE_SOCKET_BASE_URL;
// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : SOCKET_URL;

export const socket = io(URL, {
    autoConnect: false
});