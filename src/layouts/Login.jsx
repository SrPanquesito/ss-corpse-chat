import { Link } from "react-router-dom";
import FormContainerAuth from "../components/public/FormContainerAuth";

const Login = () => {
    return (
        <FormContainerAuth>
            <div className="flex flex-row justify-between items-center w-full md:justify-center">
                <h3 className="text-sky-800 dark:text-zinc-100">Log in</h3>
                <img className="w-12 md:hidden" 
                    src="src/assets/images/logo.png" alt="" srcset="" />
            </div>
            <form className="w-full space-y-4 py-4">
                <div className="space-y-2">
                    <label className="text-sm text-sky-800 dark:text-zinc-100" 
                        htmlFor="username">Username</label>
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
                        type="text" id="username" placeholder="Enter your username" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-sky-800 dark:text-zinc-100" 
                        htmlFor="password">Password</label>
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
                        type="password" id="password" placeholder="Enter your password" />
                </div>

                <div className="pb-6">
                    <Link
                        className="text-sm text-sky-800 dark:text-zinc-100 
                        hover:underline underline-offset-2 decoration-dotted
                        "
                        to="/register"
                    >
                        Don't have any account? Sign up here
                    </Link>
                </div>

                <button
                    className="w-full py-3 px-4
                    bg-sky-700 
                    dark:bg-sky-900
                    text-zinc-100 
                    dark:text-zinc-100
                    shadow-tiny 
                    shadow-zinc-700
                    dark:shadow-gray-900
                    rounded-xl 
                    hover:bg-sky-500
                    dark:hover:bg-sky-950
                    transition-all duration-300 ease-in-out"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </FormContainerAuth>
    );
};

export default Login;