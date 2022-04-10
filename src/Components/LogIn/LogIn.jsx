import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import auth from '../../Firebase.init/firebase.init'
const LogIn = () => {
  const [signInWithGoogle,user] = useSignInWithGoogle(auth)
  const location = useLocation();
  // console.log(location)
  const from = location?.state?.from?.pathname || '/'
  const navigate = useNavigate()
  const googleAuthSignIn = () => {
    signInWithGoogle()
    .then(() => {
      navigate(from,{replace: true});
    })
  }
  return (
    <div className="flex justify-center items-center my-20">
      <div className="bg-stone-700 p-20 rounded-md">
        <form action="">
          <h3 className="text-3xl text-sky-400 font-semibold">Please Log in</h3>
          <div className="my-3">
            <label
              htmlFor=""
              name="userName"
              className="block text-xl my-1 text-white"
            >
              Email
            </label>
            <input
              className="focus:outline-none  border-black w-[300px] h-[40px] pl-2 rounded"
              type="text"
              name="userName"
              id=""
              placeholder="Enter your Email"
            />
          </div>
          <div className="my-3">
            <label
              htmlFor=""
              name="userName"
              className="block text-xl my-1 text-white"
            >
              Password
            </label>
            <input
              className="focus:outline-none border-black w-[300px] h-[40px] pl-2 rounded"
              type="text"
              name="userName"
              id=""
              placeholder="Enter your password"
            />
          </div>
          <div className="my-3">
            <span className="text-white">Your are new to site please register,</span>
            <Link
                to="/Register"
                className="text-white underline mx-2 hover:text-red-300"
            >
            register
            </Link>
          </div>
          <div>
            <input
              type="submit"
              className="bg-sky-500 px-10 py-2 text-xl uppercase text-white rounded-lg"
              value="Log in"
            />
          </div>
        </form>
        <div className="flex justify-center mt-10">
          <button
            onClick={googleAuthSignIn}
            className="bg-red-500 px-10 py-2 text-xl text-white rounded-lg"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
