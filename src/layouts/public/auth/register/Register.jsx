import { useState } from "react";
import { Link } from "react-router-dom";
import FormInputField from "components/form/FormInputField";
import FormButton from "components/form/FormButton";
import { useDispatchAuth } from "providers/auth";

const Register = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        image: ''
    });
    const [loadImage, setLoadImage] = useState('');
    const dispatchAuth = useDispatchAuth();

    const inputHandler = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    };

    const fileHandler = (e) => {
        if (e.target.files.length !== 0) {
            const file = e.target.files[0];
            setForm({ ...form, [e.target.id]: file });
        }

        const reader = new FileReader();
        reader.onload = () => {
            setLoadImage(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const submitForm = (e) => {
        e.preventDefault();

        const { username, email, password, confirmPassword, image } = form;
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('confirmPassword', confirmPassword);
        formData.append('image', image);

        dispatchAuth({
            type: 'register',
            data: formData
        })

        console.log(form);
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
                            value={form.username}
                            onChangeHandler={inputHandler}
                        />
                    </div>

                    <div className="space-y-2">
                        <FormInputField 
                            id="email" 
                            label="Email" 
                            placeholder="Enter your email" 
                            type="text"
                            value={form.email}
                            onChangeHandler={inputHandler}
                        />
                    </div>

                    <div className="space-y-2">
                        <FormInputField 
                            id="password" 
                            label="Password" 
                            placeholder="Enter your password" 
                            type="password"
                            value={form.password}
                            onChangeHandler={inputHandler}
                        />
                    </div>

                    <div className="space-y-2">
                        <FormInputField 
                            id="confirm-password" 
                            label="Confirm Password" 
                            placeholder="Confirm your password" 
                            type="password"
                            value={form.confirmPassword}
                            onChangeHandler={inputHandler}
                        />
                    </div>

                    <div className="space-y-2">
                        <FormInputField 
                            id="image" 
                            label="Profile picture" 
                            placeholder="Upload profile picture" 
                            type="file"
                            value={loadImage}
                            onChangeHandler={fileHandler}
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
                        onSubmit={submitForm}
                    />
                </form>
            </div>
        </section>
    );
};

export default Register;