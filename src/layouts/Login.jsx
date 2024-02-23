import { Link } from "react-router-dom";
import FormContainerAuth from "../components/public/FormContainerAuth";
import FormInputField from "../components/shared/form/FormInputField";
import FormButton from "../components/shared/form/FormButton";

const Login = () => {
    return (
        <FormContainerAuth>
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
        </FormContainerAuth>
    );
};

export default Login;