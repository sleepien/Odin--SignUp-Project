import React from "react";
import logo from "../assets/images/odin-lined.png";

const LeftSide = () => {
  return (
    <div className="relative hidden sm:block bg-[url('./assets/images/bg.avif')] h-screen w-1/3 object-cover">
      <div className="absolute top-60 w-full flex justify-center items-center h-32 bg-[rgba(0,0,0,0.6)]">
        <img className="w-20" src={logo} alt="logo" />
        <h1 className="text-5xl font-bold text-white">ODIN</h1>
      </div>
      <div className="absolute bottom-0 w-full text-center">
        <h1 className="text-white">
          Photo by <u>Halie West</u> on <u>Unsplash</u>
        </h1>
      </div>
    </div>
  );
};

export default LeftSide;
