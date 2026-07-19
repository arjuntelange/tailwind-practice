import { Menu } from "lucide-react";
import React, { useState } from "react";

function Navbar() {
  const navlink =
    "px-2 py-0.5 rounded-xl text-gray-400 flex items-center hover:text-gray-500 hover:scale-105 hover:bg-gray-100 transition-all duration-200 ease-in";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-16 px-6 md:px-16 flex justify-between items-center shadow-md relative">
        <div className="font-extrabold text-slate-800 text-3xl">🤖Logo</div>
        <div className="block md:hidden">
          <button
            aria-label="Open navigation menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Menu />
          </button>
        </div>
        <ul
          className={`
            ${isOpen ? "flex flex-col gap-2 p-4 mt-4 min-w-40 rounded-2xl bg-white shadow-lg absolute top-full right-4" : "hidden"}
            md:flex
            md:flex-row
            md:gap-8
            `}
        >
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
