import React from "react";

function Navbar() {
  const navlink =
    "px-2 py-0.5 rounded-xl text-blue-400 hover:text-blue-500 hover:scale-105 hover:bg-blue-100 transition-all duration-200 ease-in";
  return (
    <>
      <nav className="w-full h-16 px-16 flex justify-between items-center shadow-md">
        <div className="font-extrabold text-slate-800 text-3xl">🤖Logo</div>
        <ul className="flex items-center gap-12">
          <li>
            <a href="#" className={navlink}>
              Home
            </a>
          </li>

          <li>
            <a href="#" className={navlink}>
              About
            </a>
          </li>

          <li>
            <a href="#" className={navlink}>
              Projects
            </a>
          </li>

          <li>
            <a href="#" className={navlink}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
