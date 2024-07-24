import PropTypes from 'prop-types';

const ContactCard = ({text, imageUrl, onClick}) => {
    return (
        <div className="flex items-center w-full p-3 gap-2 cursor-pointer transition-all
                        hover:bg-slate-200
                        dark:hover:bg-slate-700
                        " onClick={onClick}>
            <div className="relative">
                <img src={imageUrl}
                    className="object-cover rounded-[50%] w-12 shadow-button"
                    alt="" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-[50%] border-2 border-white"></div>
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