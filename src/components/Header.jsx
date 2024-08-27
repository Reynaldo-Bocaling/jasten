import React, { useState } from "react";
import { navlinks, socials } from "../constant";
import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";

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
          <CgMenuRight size={40} className="text-red-10 " />
        </button>
      </nav>

      {isOpen && (
        <nav className="shadow-effect fixed left-0 bottom-0 w-full h-full  z-[999] blur-effect-dark py-5 md:hidden flex flex-col items-center justify-start duration-300 transition-all border-4 border-red-10 rounded-3xl overflow-hidden">
          <div className="flex items-center justify-between   mb-20 w-full blur-effects rounded-full bg-[#e7d0af] py-4 px-7">
            <h1 className="text-stroke-sm text-shadow-sm font-title text-3xl text-red-10  flex items-center  ">
              <img src="/img/logo.png" className="w-12" alt="logo" />
              JASTEN SAN
            </h1>{" "}
            <button onClick={handleMenu} className="md:hidden ">
              <FaTimes size={40} className="text-red-10 " />
            </button>
          </div>

          <ul className="flex flex-col items-center justify-center gap-12">
            {navlinks.map((item, index) => (
              <li key={index} onClick={() => setIsOpen(false)}>
                <a
                  href={item.url}
                  className="text-black text-3xl font-extralight font-title tracking-wider"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <button className="btn text-xl font-title text-red-200 py-4 px-20 rounded-2xl mt-12">
              Buy Now
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
