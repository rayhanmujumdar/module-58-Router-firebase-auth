import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="text-center my-4">
      <div className="text-red-400">
        <h1 className="text-5xl">404</h1>
        <p className="my-3 text-3xl">Not Found</p>
      </div>
      <button
        onClick={() => navigate("/")}
        className="my-3 bg-stone-700 text-white px-5 py-2 shadow-neutral-800 shadow-md active:shadow-neutral-500 rounded-md"
      >
        Go to home
      </button>
    </div>
  );
};

export default NotFound;
