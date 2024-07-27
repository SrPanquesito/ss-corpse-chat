import PropTypes from 'prop-types';

const ContactMessage = ({content, date, contactProfilePictureUrl}) => {
    const profilePicture = contactProfilePictureUrl || 'src/assets/images/logo.png';

    return (
        <div className="flex flex-row gap-2">
            <img src={profilePicture}
                className="object-cover rounded-[50%] w-7 h-7 shadow-button cursor-pointer self-end mb-6"
                alt="" />
            <div className="flex flex-col items-start max-w-[70%] md:max-w-[75%] self-start gap-1">
                <div className="
                    relative
                    p-2
                    rounded-xl
                    shadow-tiny 
                    bg-sky-700 
                    text-zinc-100 
                    shadow-zinc-700
                    dark:bg-gray-800
                    dark:text-slate-400
                    dark:shadow-gray-900 
                    ">
                        <p className="
                            text-sm
                            ">
                            {content}
                        </p>
                </div>
                <span className="
                    pl-1
                    font-normal 
                    text-xs
                    text-gray-500
                    dark:text-gray-600
                    ">
                    {date}
                </span>
            </div>
        </div>
    )
}

ContactMessage.propTypes = {
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default ContactMessage