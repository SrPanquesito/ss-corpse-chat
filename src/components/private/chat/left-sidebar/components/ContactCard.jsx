import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSocketData } from 'providers/socket';

const ContactCard = ({id, text, imageUrl, onClick, activeContactId}) => {
    const profilePicture = imageUrl || 'src/assets/images/logo.png';
    const socketData = useSocketData();
    const [isOnline, setIsOnline] = useState(false);

    useEffect(() => {
        const online = socketData.onlineUsers.some((user) => user.id === id);
        setIsOnline(online);
    }, [socketData.onlineUsers]);

    return (
        <div className={`flex items-center w-full p-3 gap-2 cursor-pointer transition-all
                        hover:bg-slate-200
                        dark:hover:bg-slate-700
                        `
                        + (id === activeContactId ? ' bg-slate-300 dark:bg-slate-700' : '')
                    }
                    onClick={onClick}>
            <div className="flex items-center relative">
                <div style={{backgroundImage: 'url(' + profilePicture + ')'}}
                    className={`
                        bg-cover
                        bg-center 
                        bg-clip-padding
                        float-left
                        rounded-[50%] 
                        w-12 h-12 cursor-pointer 
                        shadow-button
                    `}></div>
                { isOnline &&
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-[50%] border-2 border-white"></div>
                }
            </div>
            <h4 className="text-slate-700 font-normal text-sm truncate dark:text-gray-400">{text}</h4>
        </div>
    )
}

ContactCard.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ContactCard