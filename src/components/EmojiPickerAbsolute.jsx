import EmojiPicker, { Theme } from 'emoji-picker-react';
import { useSettings } from 'providers/settings';
import { useAbsolute } from 'providers/absolute';

export default () => {
    const { darkmode } = useSettings();
    const { showEmojiPicker } = useAbsolute();

    const onEmojiClick = () => {
    };

    return (
        <div className="absolute bottom-14 right-2 md:right-14">
            <EmojiPicker
                open={showEmojiPicker}
                onEmojiClick={onEmojiClick}
                skinTonesDisabled
                theme={darkmode ? Theme.DARK : Theme.LIGHT}
                customEmojis={[
                    {
                      names: ['Alice', 'alice in wonderland'],
                      imgUrl:
                        'https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/alice.png',
                      id: 'alice'
                    },
                    {
                      names: ['Dog'],
                      imgUrl:
                        'https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/dog.png',
                      id: 'dog'
                    },
                    {
                      names: ['Hat'],
                      imgUrl:
                        'https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/hat.png',
                      id: 'hat'
                    },
                    {
                      names: ['Vest'],
                      imgUrl:
                        'https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/vest.png',
                      id: 'vest'
                    }
                  ]}
            />
        </div>
    );
};