import { useEffect, useState } from 'react';
import MessageInput from 'components/MessageInput';
import FileUploaderInput from 'components/FileUploaderInput';
import ImageUploaderInput from 'components/ImageUploaderInput';
import { useChat, useDispatchChat } from 'providers/chat';
import { useAuth } from 'providers/auth';
import { objectToFormData } from 'utils/serializer';
import { useDispatchAbsolute } from 'providers/absolute';
import { socket } from 'utils/socket';

export default () => {
    const [messageText, setMessageText] = useState('');
    const [messageFile, setMessageFile] = useState('');
    const chat = useChat();
    const auth = useAuth();
    const dispatchChat = useDispatchChat();
    const dispatchAbsolute = useDispatchAbsolute();

    useEffect(() => {
        setMessageText((prev) => prev + chat.selectedEmoji);
    }, [chat.selectedEmoji]);

    useEffect(() => {
        if (chat.lastMessageSent?.id && !chat.error) {
            setMessageText('');
            setMessageFile('');
            dispatchAbsolute({ type: 'imagepreviewdisplay/hide' });
        }
    }, [chat.lastMessageSent, chat.error]);

    const messageInputHandler = (e) => {
        const { value } = e.target;
        setMessageText(value);
    };

    const sendMessage = (e) => {
        e.preventDefault();

        const file = messageFile || '';
        let formData = new FormData();
        formData.append('message', messageText);
        formData.append('file', file);
        formData = objectToFormData('sender', auth.user, formData);
        formData = objectToFormData('receiver', chat.activeContact, formData);

        socket.timeout(5000).emit('add/newMessage', {
            message: messageText,
            file: file,
            sender: auth.user,
            receiver: chat.activeContact
        });

        dispatchChat({ type: 'http/post/send-message', payload: formData });
    }

    // TO-DO: Restrict file upload and preview to be files only.
    // TO-DO: Image upload should only select image files from the file system and / or open the camera.
    const onClickHandler = (e) => {
        // Open image preview display without file
        dispatchAbsolute({ type: 'imagepreviewdisplay/show', positionCoords: [e.pageX, e.pageY] });
    };

    const onFileUpload = (e) => {
        if (e.target.files.length !== 0) {
            const file = e.target.files[0];
            setMessageFile(file);
        }

        // Setup actual file to display in the image previewer
        prepareImagePreview(e.target.files)
    };

    const prepareImagePreview = (files) => {
        if (files?.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                dispatchAbsolute({ type: 'imagepreviewdisplay/set', images: [reader.result] });
            };
        }
    }

    return (
        <footer className="flex justify-between items-center w-full shadow py-2 md:p-3 bg-zinc-100 dark:bg-gray-800 dark:border-r dark:border-t dark:border-slate-700">
            <div className="flex items-center gap-2">
                {/* <FileUploaderInput
                    onClickHandler={onFileClick} 
                    onChangeHandler={onFileUpload}
                /> */}
                <ImageUploaderInput
                    onChangeHandler={onFileUpload}
                    onClickHandler={onClickHandler}
                />
            </div>
            <div className="grow px-2">
                <MessageInput
                    id="message-input"
                    placeholder="Type a message..."
                    value={messageText}
                    onChangeHandler={messageInputHandler}
                />
            </div>
            <div>
                <svg onClick={sendMessage}
                    className="size-7 transition-all
                        text-sky-700
                        cursor-pointer
                        hover:text-sky-600
                        dark:text-sky-600
                        dark:hover:text-sky-700
                        " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
            </div>
        </footer>
    )
}