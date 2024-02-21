const FormContainerAuth = ({ children }) => {
    return (
        <section className="flex justify-center items-center h-full">
            <div className="
                flex flex-col justify-center items-center container w-11/12 md:w-8/12
                shadow border rounded-md py-12 px-6 md:px-12
                bg-zinc-50 dark:bg-gray-800 dark:border-slate-700 dark:shadow-slate-800
                "
            >
                {children}
            </div>
        </section>
    )
}

export default FormContainerAuth;