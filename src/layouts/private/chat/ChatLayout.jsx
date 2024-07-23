import './ChatLayout.css';
import { useEffect } from 'react';
import { authStatusFromLocalStorage } from 'providers/auth/AuthActions';
import { useDispatchAuth } from 'providers/auth';
import { ChatProvider } from 'providers/chat';
import LeftSidebarChatWrapper from 'components/private/chat/left-sidebar/LeftSidebarChatWrapper';
import MainChatWrapper from 'components/private/chat/main/MainChatWrapper';
import EmojiPickerAbsolute from 'components/EmojiPickerAbsolute';

const ChatLayout = () => {
    const { user, isAuthenticated } = authStatusFromLocalStorage();
    const dispatch = useDispatchAuth();

    useEffect(() => {
        dispatch({ type: 'manual/setup', user, isAuthenticated });
    }, [isAuthenticated]);

    return (
        <ChatProvider>
            <main className="flex justify-between items-center w-full h-full">
                <LeftSidebarChatWrapper />
                <MainChatWrapper />
                <EmojiPickerAbsolute />
                {/* Right sidebar (More contact information). Will be implemented in the future. */}
            </main>
        </ChatProvider>
    );
}

export default ChatLayout;