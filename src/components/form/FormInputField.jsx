import PropTypes from 'prop-types';

const FormInputField = ({id, label, placeholder, type}) => {
    return (
        <>
            <label className="text-sm text-sky-800 dark:text-zinc-100" 
                htmlFor={id}
            >
                {label}
            </label>
            <input className="w-full py-2
                border-none 
                rounded-xl 
                dark:border-solid dark:border-slate-700
                shadow-tiny shadow-zinc-300 
                dark:shadow-slate-800
                text-sm text-gray-500 placeholder:text-gray-400 
                dark:text-gray-400 dark:placeholder:text-gray-700
                dark:bg-zinc-900
                caret-sky-600
                dark:caret-sky-800
                focus:ring-sky-600
                dark:focus:ring-sky-800
                focus:outline-none"
                type={type}
                id={id} 
                placeholder={placeholder} />
        </>
    )
}

FormInputField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default FormInputField