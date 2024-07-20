import PropTypes from 'prop-types';

const UserMessage = ({content, date}) => {
    return (
        <div className="flex flex-col items-end max-w-[70%] md:max-w-[75%] self-end gap-1">
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
                pr-1
                font-normal 
                text-xs
                text-gray-500
                dark:text-gray-600
                ">
                {date}
            </span>
        </div>
    )
}

UserMessage.propTypes = {
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default UserMessage