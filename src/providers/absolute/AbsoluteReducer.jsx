export const absoluteDefaultValues = {
    showEmojiPicker: false,
    showImagePreviewDisplay: false,
    dataImagePreviewDisplay: [],
    positionCoordsImagePreviewDisplay: [0, 0],
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
        case 'imagepreviewdisplay/clear': {
            return {
                ...prev,
                dataImagePreviewDisplay: []
            };
        }
        case 'imagepreviewdisplay/show': {
            return {
                ...prev,
                showImagePreviewDisplay: true,
                positionCoordsImagePreviewDisplay: action.positionCoords
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