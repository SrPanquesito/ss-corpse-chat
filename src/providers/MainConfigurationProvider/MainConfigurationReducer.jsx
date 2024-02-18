export const mainConfigurationInit = {
    darkmode: false
};

export function mainConfigurationReducer(mainConfiguration, action) {
    switch (action.type) {
        case 'darkmode/enable': {
            localStorage.setItem('theme', 'dark');
            return {
                ...mainConfiguration,
                darkmode: true
            };
        }
        case 'darkmode/disable': {
            localStorage.removeItem('theme');
            return {
                ...mainConfiguration,
                darkmode: false
            };
        }
        case 'darkmode/status': {
            return {
                ...mainConfiguration,
                darkmode: localStorage.getItem('theme') === 'dark'
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}