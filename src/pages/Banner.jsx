import React from "react";

const Banner = () => {
  return (
    <section className="w-full relative -mt-12">
      <div className="max-w-6xl mx-auto ">
        <img
          src="/img/banner.png"
          className="w-full p-3 rounded-2xl border-2 border-red-400"
          alt=""
        />
      </div>
      <img src="/img/footer-bg.png" className="w-full" alt="" />
    </section>
  );
};

export default Banner;
