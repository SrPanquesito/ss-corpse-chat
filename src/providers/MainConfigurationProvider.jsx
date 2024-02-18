import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';

const MainConfigurationContext = createContext(null);
const MainConfigurationDispatchContext = createContext(null);

export function MainConfigurationProvider({ children }) {
    const [mainConfiguration, dispatchConfiguration] = useReducer(mainConfigurationReducer, initialMainConfiguration);

    return (
        <MainConfigurationContext.Provider value={mainConfiguration}>
          <MainConfigurationDispatchContext.Provider value={dispatchConfiguration}>
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

function mainConfigurationReducer(mainConfiguration, action) {
    switch (action.type) {
        case 'added': {
            return {
                ...mainConfiguration,
                added: true
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialMainConfiguration = {};