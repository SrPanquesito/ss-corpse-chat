export const mainConfigurationInit = {
    darkmode: false
};

export function mainConfigurationReducer(mainConfiguration, action) {
    switch (action.type) {
        case 'darkmode/enable': {
            localStorage.setItem('theme', 'dark');
            // zinc-900
            document.body.style.background = "#18181b";
            return {
                ...mainConfiguration,
                darkmode: true
            };
        }
        case 'darkmode/disable': {
            localStorage.removeItem('theme');
            // gray-200
            document.body.style.background = "#e5e7eb";
            return {
                ...mainConfiguration,
                darkmode: false
            };
        }
        case 'darkmode/status': {
            let darkmodeStatus = localStorage.getItem('theme') === 'dark';
            if (darkmodeStatus) {
                document.body.style.background = "#18181b";
            } else {
                document.body.style.background = "#e5e7eb";
            }
            return {
                ...mainConfiguration,
                darkmode: darkmodeStatus
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}