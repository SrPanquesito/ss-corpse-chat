import { useState, useEffect } from 'react';
import { authStatusFromLocalStorage } from 'providers/auth/AuthActions';
import { useDispatchAuth } from 'providers/auth';
import SearchInput from 'components/SearchInput';
import ContactCard from 'components/ContactCard';
import MessageInput from 'components/MessageInput';
import UserMessage from 'components/conversation/UserMessage';
import ContactMessage from 'components/conversation/ContactMessage';
import './ChatLayout.css';

const ChatLayout = () => {
    const { user, isAuthenticated } = authStatusFromLocalStorage();
    const dispatch = useDispatchAuth();
    const [searchText, setSearchText] = useState('');
    const [messageText, setMessageText] = useState('');
    const currentDate = new Date().toLocaleString();

    const searchInputHandler = (e) => {
        const { value } = e.target;
        setSearchText(value);
    };

    const onContactClick = () => {
    };

    const onEmojiButtonClick = () => {
    };

    const messageInputHandler = (e) => {
        const { value } = e.target;
        setMessageText(value);
    };

    useEffect(() => {
        dispatch({ type: 'manual/setup', user, isAuthenticated });
    }, [isAuthenticated]);

    const welcomeMessage = `Hi, ${user.username}`;

    return (
        <main className="flex justify-between items-center w-full h-full">
            <aside className="flex flex-col justify-start items-center w-1/4 h-screen shadow bg-zinc-100 dark:bg-gray-800 dark:border-r dark:border-slate-700">
                <div className="flex md:hidden justify-center items-center w-full p-3 gap-2">
                    <img src="src/assets/images/maximiliano.png"
                        className="object-cover rounded-[50%] w-14 shadow-button"
                        alt="" />
                </div>
                <div className="hidden md:flex items-center w-full p-3 gap-2">
                    <img src="src/assets/images/maximiliano.png"
                        className="object-cover rounded-[50%] w-14 shadow-button cursor-pointer"
                        alt="" />
                    <h4 className="text-slate-800 dark:text-zinc-200 font-bold text-base lg:text-xl truncate max-w-[50%]">{welcomeMessage}</h4>
                    <a className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-[50%] shadow-tiny ml-auto transition-all 
                                    bg-slate-300
                                    dark:bg-zinc-900
                                    dark:border
                                    dark:border-slate-700
                                    hover:brightness-90">
                        <svg className="size-6 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </a>
                    <a className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-[50%] shadow-tiny transition-all
                                    bg-slate-300
                                    dark:bg-zinc-900
                                    dark:border
                                    dark:border-slate-700
                                    hover:brightness-90">
                        <svg className="size-5 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </a>
                </div>
                <div className="w-full p-2 pb-4">
                    <SearchInput
                        id="search-contacts"
                        placeholder="Search for contacts..."
                        value={searchText}
                        onChangeHandler={searchInputHandler}
                    />
                </div>
                <div className="w-full h-full overflow-x-hidden overflow-y-auto">
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                    <ContactCard
                        id={1}
                        text="Maximiliano"
                        imageUrl="src/assets/images/maximiliano.png"
                        onClick={onContactClick}
                    />
                </div>
            </aside>
            <section className="flex flex-col justify-between items-center grow h-screen shadow">
                <nav className="flex justify-between items-center w-full shadow pt-7 pb-3 px-3 md:p-3 bg-zinc-100 dark:bg-gray-800 dark:border-r dark:border-b dark:border-slate-700">
                    <div className="flex items-center w-full gap-2">
                        <img src="src/assets/images/maximiliano.png"
                            className="object-cover rounded-[50%] w-14 shadow-button cursor-pointer"
                            alt="" />
                        <h4 className="text-slate-800 dark:text-zinc-200 font-semibold text-base lg:text-lg truncate max-w-[75%] cursor-pointer">Maximiliano</h4>
                    </div>
                    <div>
                        <svg className="size-9 transition-all
                                text-sky-700
                                cursor-pointer
                                hover:text-sky-600
                                dark:text-sky-600
                                dark:hover:text-sky-700
                                " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </nav>
                {/* Conversation */}
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
                {/* Send message section */}
                <footer className="flex justify-between items-center w-full shadow py-2 md:p-3 bg-zinc-100 dark:bg-gray-800 dark:border-r dark:border-t dark:border-slate-700">
                    <div className="flex items-center gap-2">
                        <svg className="size-7 transition-all
                                text-sky-700
                                cursor-pointer
                                hover:text-sky-600
                                dark:text-sky-600
                                dark:hover:text-sky-700
                                " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM12.75 12a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V18a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V12Z" clipRule="evenodd" />
                            <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                        </svg>
                        <svg className="size-7 transition-all
                                text-sky-700
                                cursor-pointer
                                hover:text-sky-600
                                dark:text-sky-600
                                dark:hover:text-sky-700
                                " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                            <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="grow px-2">
                        <MessageInput
                            id="message-input"
                            placeholder="Type a message..."
                            value={messageText}
                            onChangeHandler={messageInputHandler}
                            onEmojiButtonClick={onEmojiButtonClick}
                        />
                    </div>
                    <div>
                        <svg className="size-7 transition-all
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
            </section>
            <aside className="hidden md:flex flex-col justify-center items-center md:w-1/4 h-screen shadow p-2">
                <h1>Third</h1>
            </aside>
        </main>
    );
}

export default ChatLayout;