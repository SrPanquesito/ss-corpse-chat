import { useChat } from 'providers/chat';
import ButtonDarkmode from 'components/ButtonDarkmode';

export default () => {
    const chat = useChat();
    const profilePicture = chat.activeContact?.profilePictureUrl || 'src/assets/images/logo.png';

    return (
        <nav className="flex justify-between items-center w-full shadow pt-7 pb-3 px-3 md:p-3 bg-zinc-100 dark:bg-gray-800 dark:border-r dark:border-b dark:border-slate-700">
            <div className="flex items-center w-full gap-2">
                <div style={{backgroundImage: 'url(' + profilePicture + ')'}}
                    className={`
                        bg-cover
                        bg-center 
                        bg-clip-padding
                        float-left
                        rounded-[50%] 
                        w-14 h-14 cursor-pointer 
                        shadow-button
                    `}></div>
                <h4 className="text-slate-800 dark:text-zinc-200 font-semibold text-base lg:text-lg truncate max-w-[75%] cursor-pointer">
                    {chat.activeContact?.username || ''}
                </h4>
            </div>
            <div className="flex items-center gap-2">
                <ButtonDarkmode />
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
    )
}