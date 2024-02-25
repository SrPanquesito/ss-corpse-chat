import { Link } from 'react-router-dom';
import FormInputField from 'components/form/FormInputField';
import FormButton from 'components/form/FormButton';

const Login = () => {
    return (
        <section className="flex justify-center items-center h-full">
            <div className="
                flex flex-col justify-center items-center container w-11/12 lg:w-10/12 xl:w-8/12
                shadow border rounded-md py-12 px-6 md:px-12
                bg-zinc-50 dark:bg-gray-800 dark:border-slate-700 dark:shadow-slate-800
                "
            >
                <div className="flex flex-row justify-between items-center w-full md:justify-center">
                    <h3 className="text-sky-800 dark:text-zinc-100">Log in</h3>
                    <img className="w-12 md:hidden" 
                        src="src/assets/images/logo.png" alt="" />
                </div>
                <form className="w-full space-y-4 py-4">
                    <div className="space-y-2">
                        <FormInputField 
                            id="username" 
                            label="Username" 
                            placeholder="Enter your username" 
                            type="text"
                        />
                    </div>

                    <div className="space-y-2">
                        <FormInputField 
                            id="password" 
                            label="Password" 
                            placeholder="Enter your password" 
                            type="password"
                        />
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

                    <FormButton
                        text="Log in"
                        type="submit"
                    />
                </form>
            </div>
        </section>
    );
};

export default Login;