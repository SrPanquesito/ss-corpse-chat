import PropTypes from 'prop-types';
import React, { useEffect, createContext, useContext, useReducer } from 'react';
import { socket } from 'utils/socket';

const SocketContext = createContext(null);

const socketValues = {
  isConnected: false,
  onlineUsers: [],
};

function socketReducer(prev, action) {
  switch (action.type) {
      case 'connect': {
        return {
            ...prev,
            isConnected: true
        };
      }
      case 'disconnect': {
        return {
            ...prev,
            isConnected: false
        };
      }
      case 'set/onlineUsers': {
        return {
            ...prev,
            onlineUsers: action.onlineUsers
        };
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
  }
}

export function SocketProvider({ children }) {
    const [socketConfig, dispatch] = useReducer(socketReducer, socketValues);

    useEffect(() => {
        function onConnect() {
          dispatch({ type: 'connect' });
        }
    
        function onDisconnect() {
          dispatch({ type: 'disconnect' });
        }
    
        function clientSetOnlineUsers(onlineUsers) {
          dispatch({ type: 'set/onlineUsers', onlineUsers });
        }
    
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('send/onlineUsers', clientSetOnlineUsers);
    
        return () => {
          socket.off('connect', onConnect);
          socket.off('disconnect', onDisconnect);
          socket.off('send/onlineUsers', clientSetOnlineUsers);
        };
      }, []);

    return (
      <SocketContext.Provider value={socketConfig}>
        {children}
      </SocketContext.Provider>
    );
}

SocketProvider.propTypes = {
  children: PropTypes.object.isRequired
}

export function useSocketData() {
  return useContext(SocketContext);
}
