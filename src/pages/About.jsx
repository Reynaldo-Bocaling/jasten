import React from "react";

const About = () => {
  return (
    <section id="about" className="relative w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-5 mt-20 md:-mt-20 relative z-20">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center">
          {" "}
          <h1 className="text-stroke-lg text-shadow-md font-title text-4xl md:text-7xl text-red-10 z-30 whitespace-nowrap">
            ABOUT JASTEN SAN
          </h1>
          <p className=" text-red-900 text-2xl font-extrabold tracking-wider mt-7 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at
            fuga incidunt nihil ipsam, nemo eaque veniam qui architecto aut,
            modi exercitationem, perferendis pariatur dolor adipisci! Doloremque
            neque placeat nemo sed! Sunt ad repellat tenetur?
          </p>
          <button className="btn text-xl font-title text-white py-3 px-12 rounded-2xl mt-7">
            Buy Now
          </button>
        </div>
        <img
          src="/img/about.png"
          className="w-full md:w-1/2 -mt-20 md:mt-0"
          alt=""
        />
      </div>
      {/* <img
        src="/img/logo.png"
        className="w-[40rem] absolute top-1/2 -translate-y-1/2 right-0 z-[1] opacity-10"
        alt=""
      /> */}
      <img
        src="/img/footer-bg.png"
        className="relative w-full -mt-7 md:-mt-16 z-30"
        alt=""
      />
    </section>
  );
};

export default About;
