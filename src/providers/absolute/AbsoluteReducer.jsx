export const absoluteDefaultValues = {
    showEmojiPicker: false
};

export function absoluteReducer(prev, action) {
    switch (action.type) {
        case 'emojipicker/toggle': {
            return {
                ...prev,
                showEmojiPicker: !prev.showEmojiPicker
            };
        }
        case 'emojipicker/hide': {
            return {
                ...prev,
                showEmojiPicker: false
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}