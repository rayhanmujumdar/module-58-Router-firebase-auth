import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
const {user , handleSignOut} = useFirebase();
const navigate = useNavigate()
navigate('/')
console.log(user)
  return (
    <div className="bg-stone-400 py-4 text-white pl-10">
      <nav className="flex items-center">
        <Link
          to="/"
          className="text-xl font-semibold mx-2 hover:text-stone-900"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="text-xl font-semibold mx-2 hover:text-stone-900"
        >
          Products
        </Link>
        <Link
          to="/orders"
          className="text-xl font-semibold mx-2 hover:text-stone-900"
        >
          Orders
        </Link>
        <Link
          to="/register"
          className="text-xl font-semibold mx-2 hover:text-stone-900"
        >
          Register
        </Link>
        {
            user.uid && <div className="flex items-center justify-center">
            <img src={user?.photoURL && user.photoURL} alt="" className="inline-block w-12 rounded-full"/>
            <span className="mx-2">{user?.displayName && user.displayName}</span>
        </div>
        }
        {
        user?.uid ? <button onClick={handleSignOut} className="bg-stone-600 px-3 py-2 rounded-md">Sign out</button> : <Link
          to="/login"
          className="text-xl font-semibold mx-2 hover:text-stone-900"
        >
          Login
        </Link>
        }
      </nav>
    </div>
  );
};

export default Header;
