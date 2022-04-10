import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase.init/firebase.init";

const Header = () => {
const [user] = useAuthState(auth);
const handleSignOut = () => {
  signOut(auth)
}
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
        {/* <Link
          to="/register"
          className="text-xl font-semibold mx-2 hover:text-stone-900"
        >
          Register
        </Link> */}
        <Link
          to="/profile"
          className="text-xl font-semibold mx-2 hover:text-stone-900"
        >
          Profile
        </Link>
        {
            user?.uid && <div className="bg-stone-800 rounded-md px-3 py-1 mx-2 flex items-center justify-center">
            <img src={user?.photoURL && user.photoURL} alt="" className="inline-block w-12 rounded-full"/>
            <span className="mx-2">{user?.displayName && user.displayName}</span>
        </div>
        }
        {
        user?.uid && <button onClick={handleSignOut} className="bg-stone-600 px-3 py-2 rounded-md">Sign out</button>
        //  : <Link
        //   to="/login"
        //   className="text-xl font-semibold mx-2 hover:text-stone-900"
        // >
        //   Login
        // </Link>
        }
      </nav>
    </div>
  );
};

export default Header;
