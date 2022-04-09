import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-stone-400 py-4 text-white pl-10">
      <nav>
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
          to="/Register"
          className="text-xl font-semibold mx-2 hover:text-stone-900"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="text-xl font-semibold mx-2 hover:text-stone-900"
        >
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Header;
