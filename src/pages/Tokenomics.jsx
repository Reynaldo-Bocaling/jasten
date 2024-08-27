import React from "react";
import { tokenomics } from "../constant";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative w-full">
      <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center py-12 px-12 z-30">
        <h1 className="text-stroke-lg text-shadow-md font-title text-6xl md:text-8xl text-red-10 z-30 whitespace-nowrap mb-7 md:mb-0 whitespace-nowrap">
          TOKENOMICS
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-7">
          <ul className="flex flex-wrap items-center gap-5 w-full md:w-1/2">
            {tokenomics.map((item, index) => (
              <li
                key={index}
                className="w-full  flex flex-col items-center justify-center gap-5 bg-[#f7c293] py-4 rounded-3xl"
              >
                <h1 className="text-stroke-sm text-shadow-sm font-title text-6xl text-red-100 z-30 whitespace-nowrap ">
                  {item.value}
                </h1>
                <h1 className="text-stroke-sm text-shadow-sm font-title text-2xl text-white z-30 whitespace-nowrap ">
                  {item.name}
                </h1>
              </li>
            ))}
          </ul>
          <div className="relative  w-full md:w-1/2">
            <img src="/img/tokenomics.png" alt="" className="w-full " />
            <img
              src="/img/logo.png"
              className="w-full md:w-[40rem] absolute top-1/2 -translate-y-1/2 right-0 z-[-1] opacity-10 -mt-28"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
