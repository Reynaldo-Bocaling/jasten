import React from "react";

const DottedBackground = () => {
  const dots = Array.from({ length: 10000 }, (_, index) => (
    <div key={index} className="bg-black rounded-full h-1 w-1" />
  ));

  return (
    <div className="w-full h-[30rem] md:h-[45rem] absolute top-0 left-0 overflow-hidden  grid grid-cols-[repeat(auto-fill,_minmax(10px,_1fr))] grid-rows-[repeat(auto-fill,_minmax(10px,_1fr))] opacity-25 gap-2 z-[1]">
      {dots}
    </div>
  );
};

export default DottedBackground;
