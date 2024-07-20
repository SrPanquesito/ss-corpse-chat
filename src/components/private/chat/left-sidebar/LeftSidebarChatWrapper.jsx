import { useState } from 'react';
import SearchInput from 'components/SearchInput';
import ContactsListWrapper from './components/ContactsListWrapper';
import WelcomeWrapper from './components/WelcomeWrapper';

const LeftSidebarChatWrapper = () => {
    const [searchText, setSearchText] = useState('');

    const searchInputHandler = (e) => {
        const { value } = e.target;
        setSearchText(value);
    };

    return (
        <aside className="flex flex-col justify-start items-center w-1/4 h-screen shadow bg-zinc-100 dark:bg-gray-800 dark:border-r dark:border-slate-700">
            <WelcomeWrapper />
            <div className="w-full p-2 pb-4">
                <SearchInput
                    id="search-contacts"
                    placeholder="Search for contacts..."
                    value={searchText}
                    onChangeHandler={searchInputHandler}
                />
            </div>
            <ContactsListWrapper />
        </aside>
    )
};

export default LeftSidebarChatWrapper;