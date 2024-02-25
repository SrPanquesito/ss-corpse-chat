import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';
import { authReducer, authDefaultValues } from './AuthReducer';

const AuthContext = createContext(null);
const AuthDispatchContext = createContext(null);

export function AuthProvider({ children }) {
    const [authData, dispatchAuth] = useReducer(authReducer, authDefaultValues);

    return (
        <AuthContext.Provider value={authData}>
          <AuthDispatchContext.Provider value={dispatchAuth}>
            {children}
          </AuthDispatchContext.Provider>
        </AuthContext.Provider>
      );
}

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export function useAuth() {
    return useContext(AuthContext);
}

export function useDispatchAuth() {
    return useContext(AuthDispatchContext);
}
