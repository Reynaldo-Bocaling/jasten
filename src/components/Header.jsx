import React, { useState } from "react";
import { navlinks, socials } from "../constant";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="relative w-full z-50 md:px-7">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-9 mt-4 blur-effects rounded-full bg-[#e9b18f]">
        <h1 className="text-stroke-sm text-shadow-sm font-title text-4xl text-red-10  flex items-center">
          <img src="/img/logo.png" className="w-12" alt="logo" />
          JASTEN SAN
        </h1>
        <ul className="hidden md:flex items-center gap-7">
          {navlinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                className="text-black text-2xl font-extralight font-title tracking-wider"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-9">
          <div className="flex items-center gap-5">
            {socials.slice(0, 2)?.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="h-14 w-14 bg-[#d0a78e] rounded-full flex items-center justify-center"
              >
                <img src={item.img} className="w-10 h-10" alt="" />
              </a>
            ))}
          </div>
          <button className="btn text-xl font-title text-red-200 py-3 px-12 rounded-2xl">
            Buy Now
          </button>
        </div>
        <button onClick={handleMenu} className="md:hidden">
          <CgMenuRight size={40} className="text-yellow-10 " />
        </button>
      </nav>

      {isOpen && (
        <nav className="shadow-effect fixed top-0 left-0 bottom-0 w-9/12 bg-[#9bc1fa]  z-[999] py-5 md:hidden flex flex-col items-center justify-start duration-300 transition-all">
          <div className="flex items-center mb-20">
            <h1 className="text-stroke-sm text-yellow-10 text-7xl font-bold ">
              $TSUJI
            </h1>
          </div>

          <ul className="flex flex-col items-center justify-center gap-9">
            {navlinks.map((item, index) => (
              <li key={index} onClick={() => setIsOpen(false)}>
                <a
                  href={item.url}
                  className="text-stroke-sm text-sky-blue text-4xl font-bold"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <button className="shadow-effect text-white text-2xl font-semibold bg-yellow-10 py-3 px-12  rounded-xl mt-10">
              Buy Now
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
