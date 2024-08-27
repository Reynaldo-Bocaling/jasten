import React from "react";

const BendedTextSVG = () => {
  return (
    <svg width="500" height="200">
      <defs>
        <path
          id="curve"
          d="M10,100 A100,100 0 0,1 300,100 A100,100 0 0,1 500,100"
        />
      </defs>
      <text fill="yellow" fontSize="30" fontFamily="Arial">
        <textPath href="#curve">JASTEN SAN</textPath>
      </text>
    </svg>
  );
};

export default BendedTextSVG;
