import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';
import { mainConfigurationReducer, mainConfigurationInit } from './MainConfigurationReducer';

const MainConfigurationContext = createContext(null);
const MainConfigurationDispatchContext = createContext(null);

export function MainConfigurationProvider({ children }) {
    const [mainConfiguration, dispatchMainConfiguration] = useReducer(mainConfigurationReducer, mainConfigurationInit);

    return (
        <MainConfigurationContext.Provider value={mainConfiguration}>
          <MainConfigurationDispatchContext.Provider value={dispatchMainConfiguration}>
            {children}
          </MainConfigurationDispatchContext.Provider>
        </MainConfigurationContext.Provider>
      );
}

MainConfigurationProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export function useMainConfiguration() {
    return useContext(MainConfigurationContext);
}

export function useMainConfigurationDispatch() {
    return useContext(MainConfigurationDispatchContext);
}
