import React from "react";
import laptopImg from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full text-black bg-white py-8">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex justify-center items-center">
            <img
              src={laptopImg}
              alt="/"
              className="h-[300px] md:h-[400px] object-cover"
            />
          </div>
          <div className="md:col-span-2 flex flex-col justify-center  px-4 py-4">
            <h1 className="text-lg md:text-2xl font-bold text-[#00df9a]">
              DATA ANALYTICS DASHBOARD
            </h1>
            <h2 className="font-bold text-2xl md:text-3xl pb-2">
              Manage Data Analytics Centrally
            </h2>
            <p className="md:text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              corrupti consequuntur placeat cum minima recusandae, deserunt
              nostrum, optio dolorum delectus modi quo hic, debitis molestias!
            </p>
            <button className="my-4 bg-black text-[#00df9a] w-[250px] rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
