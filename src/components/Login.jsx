import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <h3 className="font-bold text-xl text-gray-800">Login</h3>
            <form>
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
        </>
    );
};

export default Login;