import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 py-3 px-10 flex items-center justify-between">
      <h1 className="text-white text-lg font-black uppercase">
        Title Description App
      </h1>
      <button className="bg-lime-300 px-2 py-1 rounded-md text-black font-bold hover:bg-lime-500 text-sm  ">
        Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
