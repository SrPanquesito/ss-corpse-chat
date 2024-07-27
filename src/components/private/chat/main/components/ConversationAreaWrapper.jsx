import { useEffect } from 'react';
import { useChat, useDispatchChat } from 'providers/chat';
import UserMessage from './UserMessage';
import ContactMessage from './ContactMessage';

export default () => {
    const chat = useChat();
    const dispatchChat = useDispatchChat();
    const currentDate = new Date().toLocaleString();

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
            <UserMessage
                content="Hello, how are you?"
                date={'Este va abajo'}
            />
            <UserMessage
                content="Hello, how are you?"
                date={currentDate}
            />
            <ContactMessage
                content="I'm fine, thank you."
                date={currentDate}
            />
            <ContactMessage
                content="I'm fine, thank you."
                date={currentDate}
            />
            <UserMessage
                content="Hello, how are you?"
                date={currentDate}
            />
            <ContactMessage
                content="I'm fine, thank you."
                date={currentDate}
            />
            <UserMessage
                content="Hello, how are you?"
                date={currentDate}
            />
            <UserMessage
                content="Hello, how are you?"
                date={currentDate}
            />
            <UserMessage
                content="Hello, how are you?"
                date={currentDate}
            />
            <ContactMessage
                content="I'm fine, thank you."
                date={currentDate}
            />
            <ContactMessage
                content="I'm fine, thank you."
                date={currentDate}
            />
            <ContactMessage
                content="I'm fine, thank you."
                date={currentDate}
            />
            <ContactMessage
                content="I'm fine, thank you."
                date={currentDate}
            />
            <ContactMessage
                content="I'm fine, thank you."
                date={currentDate}
            />
            <UserMessage
                content="Hello, how are you?"
                date={'Este va arriba'}
            />
        </div>
    )
}