import React from 'react';
import { Link } from "react-router-dom";

import { useMainConfiguration, useMainConfigurationDispatch } from '../providers/MainConfigurationProvider';

const Register = () => {
    const mainConfiguration = useMainConfiguration();
    const dispatchConfiguration = useMainConfigurationDispatch();

    return (
        <>
            <h3 className="font-bold text-xl text-gray-800">Register</h3>
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="username" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="password" />
                </div>

                <div>
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input type="password" id="confirm-password" placeholder="confirm-password" />
                </div>

                <div>
                    <label htmlFor="image">Profile picture</label>
                    <input type="file" id="image" />
                </div>

                <button
                    className="bg-emerald-400 border-2 border-emerald-400 hover:bg-emerald-300 hover:border-slate-3"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        dispatchConfiguration({
                            type: 'added'
                        });
                    }}
                >
                    Register
                </button>

                <div>
                    <span><Link to="/login">Login to your account</Link></span>
                </div>

                {/* TODO: Remove this comment and tag. Test purposes */}
                <span>
                    {JSON.stringify(mainConfiguration, null, 2)}
                </span>
            </form>
        </>
    );
};

export default Register;