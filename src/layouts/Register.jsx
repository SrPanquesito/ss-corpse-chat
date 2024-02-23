import { Link } from "react-router-dom";
import FormContainerAuth from "../components/public/FormContainerAuth";
import FormInputField from "../components/shared/form/FormInputField";
import FormButton from "../components/shared/form/FormButton";

const Register = () => {
    const submitForm = (e) => {
        e.preventDefault();
    };

    return (
        <FormContainerAuth>
            <div className="flex flex-row justify-between items-center w-full md:justify-center">
                <h3 className="text-sky-800 dark:text-zinc-100">Register</h3>
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
                        id="email" 
                        label="Email" 
                        placeholder="Enter your email" 
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

                <div className="space-y-2">
                    <FormInputField 
                        id="confirm-password" 
                        label="Confirm Password" 
                        placeholder="Confirm your password" 
                        type="password"
                    />
                </div>

                <div className="space-y-2">
                    <FormInputField 
                        id="image" 
                        label="Profile picture" 
                        placeholder="Upload profile picture" 
                        type="file"
                    />
                </div>

                <div className="pb-6">
                    <Link
                        className="text-sm text-sky-800 dark:text-zinc-100 
                        hover:underline underline-offset-2 decoration-dotted
                        "
                        to="/login"
                    >
                        Login to your account
                    </Link>
                </div>

                <FormButton
                    text="Register"
                    type="submit"
                    onClick={submitForm}
                />
            </form>
        </FormContainerAuth>
    );
};

export default Register;