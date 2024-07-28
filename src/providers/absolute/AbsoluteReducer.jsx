export const absoluteDefaultValues = {
    showEmojiPicker: false,
    showImagePreviewDisplay: false,
    dataImagePreviewDisplay: [],
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
        case 'imagepreviewdisplay/set': {
            return {
                ...prev,
                dataImagePreviewDisplay: action.images
            };
        }
        case 'imagepreviewdisplay/show': {
            return {
                ...prev,
                showImagePreviewDisplay: true
            };
        }
        case 'imagepreviewdisplay/hide': {
            return {
                ...prev,
                showImagePreviewDisplay: false
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}