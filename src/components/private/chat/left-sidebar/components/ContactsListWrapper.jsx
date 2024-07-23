import { useEffect } from 'react';
import ContactCard from 'components/private/chat/left-sidebar/components/ContactCard';
import { useChat, useDispatchChat } from 'providers/chat';

export default () => {
    const chat = useChat();
    const dispatchChat = useDispatchChat();

    useEffect(() => {
        if (chat.contacts?.length === 0 && !chat.error) {
            dispatchChat({ type: 'get/all/contacts' });
        }
    }, [chat.contacts, chat.error]);

    const onContactClick = (contact) => {
        console.log(contact);
    };

    return (
        <div className="w-full h-full overflow-x-hidden overflow-y-auto">
            {
                chat.contacts && chat.contacts.length > 0 ? chat.contacts.map((contact) => 
                    <ContactCard
                        key={contact.id}
                        id={contact.id}
                        text={contact.username}
                        imageUrl={"src/assets/images/maximiliano.png"}
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