import React from "react";
import { socials } from "../constant";
import DottedBackground from "../components/DottedBackground";
import Header from "../components/Header";
import { IoArrowDown } from "react-icons/io5";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full">
      <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center gap-5  ">
        <Header />
        <h1 className="text-stroke-lg text-shadow-lg font-title text-7xl md:text-14xl text-red-10 z-30 mt-9">
          JASTEN SAN
        </h1>
        <img
          src="/img/hero.png"
          className="w-[50rem] ml-12 -mt-16 md:-mt-40 z-30 "
          alt=""
        />
        {/* socials */}
        <div className="absolute top-64 right-5 hidden md:flex flex-col items-end justify-center gap-9  z-30">
          {socials.slice(2, 5)?.map((item, index) => (
            <a
              href={item.url}
              key={index}
              className="w-16 h-16 bg-red-10 relative flex items-center justify-center rounded-full"
            >
              <img src={item.img} className="w-12 h-12 z-30" alt="link icons" />
            </a>
          ))}

          <button className="bg-red-10 text-red-200 text-2xl font- font-title py-3 px-7 rounded-full flex items-center gap-3">
            Tokenomics
            <IoArrowDown size={30} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 -mt-7 md:-mt-20 z-20">
          <h1 className="text-stroke-sm text-shadow-md font-title text-3xl text-white z-30">
            CONTRACT ADDRESS
          </h1>
          <div className="flex items-center gap-3 bg-red-10 py-3 pl-7 pr-2 rounded-full box-shadow-sm border border-black">
            <p className="text-sm md:text-xl text-white font-title tracking-wider">
              0X8DHS878DFS7DSNSDS8DSYDS78s8s7
            </p>
            <button className="btn text-sm md:text-lg font-title text-black py-2 px-5 rounded-full">
              COPY
            </button>
          </div>
        </div>
      </div>{" "}
      <DottedBackground />
      <img src="/img/footer-bg.png" className="w-full" alt="" />
    </section>
  );
};

export default Hero;
