import React from "react";
import { socials } from "../constant";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="max-w-7xl mx-auto flex items-end justify-between pt-12">
        <div className="flex-1 flex flex-col items-center justify-center gap-5  pb-12 px-2">
          <img src="/img/logo.png" className="w-[9rem]" alt="" />
          <h1 className="text-stroke-md text-shadow-md font-title text-6xl text-red-10 z-30 whitespace-nowrap">
            JASTEN SAN
          </h1>
          <h1 className="relative  font-title text-3xl text-black whitespace-nowrap">
            Connect With:
          </h1>
          <div className="relative flex items-center justify-center gap-2 md:gap-9 w-full mt-7 z-20">
            {socials.map((item, index) => (
              <a
                href={item.url}
                key={index}
                className="w-16 h-16 relative flex items-center justify-center  bg-[#fcb391] rounded-full"
              >
                <img
                  src={item.img}
                  className="w-12 h-12 z-30"
                  alt="link icons"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <img
        src="/img/tokenomics.png"
        className="w-[10rem] md:w-[25em] absolute -bottom-0 -left-12 opacity-60s"
        alt=""
      />
      <img
        src="/img/main.png"
        className="hidden w-[20rem] absolute -bottom-3 -right-12 md:flex"
        alt=""
      />
    </section>
  );
};

export default Contact;
