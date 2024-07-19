import { useState, useEffect } from 'react';
import { authStatusFromLocalStorage } from 'providers/auth/AuthActions';
import { useDispatchAuth } from 'providers/auth';
import SearchInput from 'components/SearchInput';
import ContactCard from 'components/ContactCard';
import './ChatLayout.css';

const ChatLayout = () => {
    const { user, isAuthenticated } = authStatusFromLocalStorage();
    const dispatch = useDispatchAuth();
    const [searchText, setSearchText] = useState();

    const inputHandler = (e) => {
        const { value } = e.target;
        setSearchText(value);
    };

    const onContactClick = () => {
    };

    useEffect(() => {
        dispatch({ type: 'manual/setup', user, isAuthenticated });
    }, [isAuthenticated]);

    const welcomeMessage = `Hi, ${user.username}`;

    return (
        <main className="flex justify-between items-center w-full h-full">
            <aside className="flex flex-col justify-start items-center w-1/4 h-screen shadow">
                <div className="flex md:hidden justify-center items-center w-full p-3 gap-2">
                    <img src="src/assets/images/maximiliano.png"
                        className="object-cover rounded-[50%] w-14 shadow-button"
                        alt="" />
                </div>
                <div className="hidden md:flex items-center w-full p-3 gap-2">
                    <img src="src/assets/images/maximiliano.png"
                        className="object-cover rounded-[50%] w-14 shadow-button"
                        alt="" />
                    <h4 className="font-bold text-base lg:text-xl truncate max-w-[50%]">{welcomeMessage}</h4>
                    <a className="flex items-center justify-center w-8 h-8 cursor-pointer bg-slate-300 rounded-[50%] shadow-tiny ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </a>
                    <a className="flex items-center justify-center w-8 h-8 cursor-pointer bg-slate-300 rounded-[50%] shadow-tiny">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </a>
                </div>
                <div className="w-full p-2 pb-4">
                    <SearchInput
                        id="search-contacts"
                        placeholder="Search for contacts..."
                        value={searchText}
                        onChangeHandler={inputHandler}
                    />
                </div>
                <div className="w-full h-full overflow-x-hidden overflow-y-scroll light-scrollbar">
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
            <section className="flex flex-col justify-center items-center grow h-screen shadow p-2">
                <h1>Second</h1>
            </section>
            <aside className="hidden md:flex flex-col justify-center items-center md:w-1/4 h-screen shadow p-2">
                <h1>Third</h1>
            </aside>
        </main>
    );
}

export default ChatLayout;