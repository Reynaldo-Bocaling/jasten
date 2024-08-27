import React from "react";
import { socials } from "../constant";
import { IoArrowDown } from "react-icons/io5";

const HeroSocialMedia = () => {
  return (
    <div className=" absolute bottom-0 left-0 w-full md:w-auto md:top-64 md:right-5 flex flex-col md:items-end justify-center gap-4 md:gap-9 px-3 md:px-0  z-30">
      <div className="flex md:flex-col md:items-end justify-center gap-9">
        {socials.slice(2, 5)?.map((item, index) => (
          <a
            href={item.url}
            key={index}
            className="w-16 h-16 bg-[#f7766f] relative flex items-center justify-center rounded-full"
          >
            <img src={item.img} className="w-12 h-12 z-30" alt="link icons" />
          </a>
        ))}
      </div>

      <button className=" bg-[#f7766f] text-red-950 text-2xl font- font-title py-3 px-7 rounded-full flex items-center justify-center gap-3">
        Tokenomics
        <IoArrowDown size={30} />
      </button>
    </div>
  );
};

export default HeroSocialMedia;
