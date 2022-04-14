import React from "react";
import { FiUser, FiUsers } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="text-black bg-white py-12">
      <div className="container my-8">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-3 gap-y-16 md:gap-y-4 gap-x-4 px-8">
          <div className="flex flex-col justify-center items-center shadow-md shadow-[#00df9a] rounded-md hover:scale-105 duration-700">
            <FiUser className="text-[#00df9a] mt-[-20px]" size={50} />
            <h1 className="my-2 text-xl font-bold md:text-2xl">Single User</h1>
            <p className="text-2xl font-bold py-4">$149</p>
            <div className="md:text-lg">
              <p className="py-1 border-b border-[#00df9a]">500 GB Storage</p>
              <p className="py-1 border-b border-[#00df9a]">1 User Allowed</p>
              <p className="py-1 border-b border-[#00df9a]">Send up to 2GB</p>
              <button className="mt-8 bg-[#00df9a] px-6 rounded my-4 hover:bg-black duration-500 hover:text-[#00df9a]">
                Start Trial
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center shadow-md shadow-[#00df9a] rounded-md bg-gray-100 md:mt-[-50px] hover:scale-105 duration-700">
            <FiUsers className="text-[#00df9a] mt-[-20px]" size={50} />
            <h1 className="my-2 text-xl font-bold md:text-2xl">Partnership</h1>
            <p className="text-2xl font-bold py-4">$199</p>
            <div className="md:text-lg">
              <p className="py-1 border-b border-[#00df9a]">1 TB Storage</p>
              <p className="py-1 border-b border-[#00df9a]">3 Users Allowed</p>
              <p className="py-1 border-b border-[#00df9a]">Send up to 10 GB</p>
              <button className="mt-8 bg-black text-white px-6 rounded my-4 duration-500 hover:text-[#00df9a]">
                Start Trial
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center shadow-md shadow-[#00df9a] rounded-md hover:scale-105 duration-700">
            <FaUsers className="text-[#00df9a] mt-[-20px]" size={50} />
            <h1 className="my-2 text-xl font-bold md:text-2xl">Group Acount</h1>
            <p className="text-2xl font-bold py-4">$299</p>
            <div className="md:text-lg">
              <p className="py-1 border-b border-[#00df9a]">5 TB Storage</p>
              <p className="py-1 border-b border-[#00df9a]">10 Users Allowed</p>
              <p className="py-1 border-b border-[#00df9a]">Send up to 20 GB</p>
              <button className="mt-8 bg-[#00df9a] px-6 rounded my-4 hover:bg-black duration-500 hover:text-[#00df9a]">
                Start Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
