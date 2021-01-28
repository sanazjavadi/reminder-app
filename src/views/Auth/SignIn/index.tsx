/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { Login, userState } from '../../../reducers/auth';
import validate from '../../../utils/validateInfo';

// assets
import Loading from '../../../svg/Loading';

type Iprops = {
    signup: () => void;
};

const Index: React.FC<Iprops> = ({ signup }) => {
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const { loading } = useSelector(userState);

    // form values
    const email = useInput('');
    const password = useInput('');

    const handlesignIn = () => {
        const data = {
            email: email.value,
            password: password.value,
        };
        setErrors(validate(data));
        if (Object.keys(errors).length === 0) {
            dispatch(Login(data));
        }
    };

    return (
        <div className="mx-auto lg:w-4/12  md:w-5/12 sm:w-6/12 w-9/12 min-w-min	 h-auto flex items-center justify-center rounded-2xl flex-col bg-DarkPurple">
            <div className="text-white flex items-center justify-between px-5 w-full p-7">
                <span className="text-xl">Login</span>
            </div>
            <hr className="h-2 w-full opacity-10" />
            <form className="w-10/12 mt-7" onSubmit={handlesignIn}>
                <input
                    value={email.value}
                    onChange={email.onChange}
                    type="text"
                    placeholder="Email"
                    className="bg-ShadePurple text-gray-100 py-4 px-3 w-full appearance-none rounded-2xl focus:outline-none mt-2"
                />
                {errors.email && <small className="ml-3 text-red-600">{errors.email}</small>}
                <input
                    value={password.value}
                    onChange={password.onChange}
                    type="password"
                    placeholder="Password"
                    className="bg-ShadePurple text-gray-100 py-4 px-3 w-full appearance-none rounded-2xl focus:outline-none mt-2"
                />
                {errors.password && <small className="ml-3 text-red-600">{errors.password}</small>}
                <button
                    type="submit"
                    className={`bg-LightPurple text-white py-4 w-full my-5  h-16 flex justify-center items-center rounded-2xl hover:opacity-80 transition duration-300 ease-in-out ${
                        loading && 'opacity-30 cursor-wait bg-red-100'
                    } `}
                >
                    {loading ? <Loading className="w-16 h-16 fill-current text-white absolute" /> : 'Login'}
                </button>
            </form>
            <hr className="h-2 w-full opacity-10 mt-4" />
            <p className="text-LightPurple text-center mt-5 mb-6 text-bold">
                You have not account ?
                <span
                    role="button"
                    onKeyDown={signup}
                    tabIndex={-1}
                    className="cursor-pointer  pl-2 hover:opacity-60 transition duration-300 ease-in-out"
                    onClick={signup}
                >
                    Sign Up
                </span>
            </p>
        </div>
    );
};

export default Index;
