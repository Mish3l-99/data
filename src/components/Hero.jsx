import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="container h-screen text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold py-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-6xl sm:text-4xl text-3xl font-bold md:py-4 my-1">
          Grow with Data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-lg font-bold ">
            Fast, felxible financing for
          </p>
          <Typed
            className="md:text-3xl sm:text-2xl text-lg font-bold pl-2 text-gray-500"
            strings={["BTB.", "BTC.", "SASS."]}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
        </div>
        <p className="md:2xl text-xl fonr-semibold text-gray-400 my-2 p-2 bg-[#00df9a]/10">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </p>
        <button className="btn w-[250px] mx-auto my-4">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
