import { useEffect } from 'react';
import { useChat, useDispatchChat } from 'providers/chat';
import { useAuth } from 'providers/auth';
import UserMessage from './UserMessage';
import ContactMessage from './ContactMessage';

export default () => {
    const auth = useAuth();
    const chat = useChat();
    const dispatchChat = useDispatchChat();

    useEffect(() => {
        if (chat.activeContact?.id) {
            dispatchChat({
                type: 'http/get/contact/messages',
                payload: {
                    id: chat.activeContact.id
                }
            });
        }
    }, [chat.activeContact?.id]);

    return (
        <div className="flex flex-col-reverse justify-start w-full h-full overflow-x-hidden overflow-y-auto px-3 py-4 gap-2">
            {
                chat.activeMessages && chat.activeMessages.length > 0 ? chat.activeMessages.map((msg) => {
                    if (msg.senderId === chat.activeContact.id) {
                        return (
                            <ContactMessage
                                id={msg.id}
                                key={msg.id}
                                content={msg.text}
                                date={msg.createdAt}
                                contactProfilePictureUrl={chat.activeContact.profilePictureUrl}
                            />
                        )
                    }
                    if (msg.senderId === auth.user.id) {
                        return (
                            <UserMessage
                                id={msg.id}
                                key={msg.id}
                                content={msg.text}
                                date={msg.createdAt}
                            />
                        )
                    }
                }) :
                    <span className="p-3
                        font-normal 
                        text-sm
                        text-gray-500
                    ">
                        No messages found for this contact.
                    </span>
            }
        </div>
    )
}