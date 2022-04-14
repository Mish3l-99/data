import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="w-full py-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-b border-gray-600">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <h2 className="logo">Data.</h2>
            <p className="my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              officia dicta rem tenetur perspiciatis laboriosam placeat
              molestias soluta, doloribus ipsam!
            </p>
            <div className="flex max-w-[260px] my-4">
              <FaFacebookSquare
                className="mr-2 hover:text-[#00df9a] duration-500"
                size={30}
              />
              <FaInstagram
                className="mr-2 hover:text-[#00df9a] duration-500"
                size={30}
              />
              <FaTwitterSquare
                className="mr-2 hover:text-[#00df9a] duration-500"
                size={30}
              />
              <FaGithubSquare
                className="mr-2 hover:text-[#00df9a] duration-500"
                size={30}
              />
              <FaDribbbleSquare
                className="mr-2 hover:text-[#00df9a] duration-500"
                size={30}
              />
            </div>
          </div>
          <div className="p-4">
            <h1>Solutions</h1>
            <div className="my-4 flex flex-col">
              <a href="/">Analytics</a>
              <a href="/">Marketing</a>
              <a href="/">Commerce</a>
              <a href="/">Insights</a>
            </div>
          </div>
          <div className="p-4">
            <h1>Support</h1>
            <div className="my-4 flex flex-col">
              <a href="/">Pricing</a>
              <a href="/">Documentation</a>
              <a href="/">Guides</a>
              <a href="/">API Status</a>
            </div>
          </div>
          <div className="p-4">
            <h1>Company</h1>
            <div className="my-4 flex flex-col">
              <a href="/">About</a>
              <a href="/">Blog</a>
              <a href="/">Jobs</a>
              <a href="/">Press</a>
              <a href="/">Partners</a>
            </div>
          </div>
          <div className="p-4">
            <h1>Legal</h1>
            <div className="my-4 flex flex-col">
              <a href="/">Claim</a>
              <a href="/">Privacy</a>
              <a href="/">Terms and Conditions</a>
            </div>
          </div>
        </div>
        {/* rights */}
        <div className="text-center mt-4 text-[#00df9a]">
          <p>All Rights Reserved. &copy;</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
