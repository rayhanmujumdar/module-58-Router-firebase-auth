import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init/firebase.init";

const Register = () => {
  const [signInGoogle,] = useSignInWithGoogle(auth)
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location);
  const handleSignInWithGoogle = () => {
    signInGoogle()
    .then(() => {
      navigate("/")
    })
  }
  return (
    <div className="flex justify-center items-center my-20">
      <div className="bg-stone-700 p-20 rounded-md">
        <form action="">
        <h3 className="text-3xl text-sky-400 font-semibold">Please Register Now</h3>
          <div className="my-3">
              <label htmlFor="" name='userName' className="block text-xl my-1 text-white">Your name</label>
              <input className="focus:outline-none border-black w-[300px] h-[40px] pl-2 rounded" type="text" name="userName" id="" placeholder="Enter your name"/>
          </div>
          <div className="my-3">
              <label htmlFor="" name='userName' className="block text-xl my-1 text-white">Email</label>
              <input className="focus:outline-none  border-black w-[300px] h-[40px] pl-2 rounded" type="text" name="userName" id="" placeholder="Enter your Email"/>
          </div>
          <div className="my-3">
              <label htmlFor="" name='userName' className="block text-xl my-1 text-white">Password</label>
              <input className="focus:outline-none border-black w-[300px] h-[40px] pl-2 rounded" type="text" name="userName" id="" placeholder="Enter your password"/>
          </div>
          <div className="my-3">
            <span className="text-white">Already register?,</span>
            <Link
                to="/login"
                className="text-white underline mx-2 hover:text-red-300"
            >
            Login
            </Link>
          </div>
          <div>
              <input type="submit" className="bg-sky-500 px-10 py-2 text-xl uppercase text-white rounded-lg shadow-indigo-500/50" value='Sign up'/>
          </div>   
        </form>
        
        <div onClick={handleSignInWithGoogle} className='flex justify-center mt-10'>
              <button className="bg-red-500 px-10 py-2 text-xl text-white rounded-lg">Continue with Google</button>
          </div>
      </div>
    </div>
  );
};

export default Register;
