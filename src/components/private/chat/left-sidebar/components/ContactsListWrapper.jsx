import { useEffect } from 'react';
import ContactCard from 'components/private/chat/left-sidebar/components/ContactCard';
import { useChat, useDispatchChat } from 'providers/chat';

export default () => {
    const chat = useChat();
    const dispatchChat = useDispatchChat();

    useEffect(() => {
        if (chat.contacts?.length === 0 && !chat.error) {
            dispatchChat({ type: 'http/get/contacts' });
        }
        if (chat.contacts?.length > 0 && !chat.activeContact) {
            dispatchChat({ type: 'set/activeContact', activeContact: chat.contacts[0] });
        }
    }, [chat.contacts, chat.error]);

    const onContactClick = (contact) => {
        dispatchChat({ type: 'set/activeContact', activeContact: contact });
    };

    return (
        <div className="w-full h-full overflow-x-hidden overflow-y-auto">
            {
                chat.contacts && chat.contacts.length > 0 ? chat.contacts.map((contact) => 
                    <ContactCard
                        key={contact.id}
                        id={contact.id}
                        activeContactId={chat.activeContact?.id}
                        username={contact.username}
                        profilePictureUrl={contact.profilePictureUrl}
                        lastMessage={contact.lastMessage}
                        onClick={() => onContactClick(contact)}
                    />
                ) :
                    <span className="p-3
                        font-normal 
                        text-sm
                        text-gray-500
                    ">
                        No contacts found.
                    </span>
            }
        </div>
    )
};