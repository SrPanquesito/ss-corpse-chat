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
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}