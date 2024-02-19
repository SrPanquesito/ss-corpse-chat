import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="flex justify-center items-center h-full">
            <div className="
                flex flex-col justify-center items-center container w-10/12 md:w-8/12
                shadow border rounded-md py-12 space-y-12
                bg-zinc-50 dark:bg-gray-800 dark:border-slate-700 dark:shadow-slate-800"
            >
                <h3 className="text-gray-800">Login</h3>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="username" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="password" />
                    </div>

                    <button
                        className="bg-emerald-400 border-2 border-emerald-400 hover:bg-emerald-300 hover:border-slate-3"
                        type="submit"
                    >
                        Login
                    </button>

                    <div>
                        <span><Link to="/register">Don't have any account? Sign up here</Link></span>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;