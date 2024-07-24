import EmojiPicker, { Theme } from 'emoji-picker-react';
import { useSettings } from 'providers/settings';
import { useAbsolute } from 'providers/absolute';
import { useDispatchChat } from 'providers/chat';

export default () => {
    const { darkmode } = useSettings();
    const { showEmojiPicker } = useAbsolute();
    const dispatchChat = useDispatchChat();

    const onEmojiClick = (event) => {
        dispatchChat({ type: 'set/selected/emoji', selectedEmoji: event.emoji });
    };

    return (
        <div className="absolute bottom-14 right-2 md:right-14">
            <EmojiPicker
                open={showEmojiPicker}
                onEmojiClick={onEmojiClick}
                skinTonesDisabled
                theme={darkmode ? Theme.DARK : Theme.LIGHT}
            />
        </div>
    );
};