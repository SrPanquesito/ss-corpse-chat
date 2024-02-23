import { Link } from "react-router-dom";
import FormInputField from "../../../../components/form/FormInputField";
import FormButton from "../../../../components/form/FormButton";

const Register = () => {
    const submitForm = (e) => {
        e.preventDefault();
    };

    return (
        <section className="flex justify-center items-center h-full">
            <div className="
                flex flex-col justify-center items-center container w-11/12 lg:w-10/12 xl:w-8/12
                shadow border rounded-md py-12 px-6 md:px-12
                bg-zinc-50 dark:bg-gray-800 dark:border-slate-700 dark:shadow-slate-800
                "
            >
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
            </div>
        </section>
    );
};

export default Register;