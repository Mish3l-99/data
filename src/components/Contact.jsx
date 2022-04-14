import React from "react";

const Contact = () => {
  return (
    <div className="w-full py-8">
      <div className="container">
        <div className="grid md:grid-cols-5 p-4 gap-x-4 gap-y-16 md:gap-y-4">
          <div className="md:col-span-3">
            <h1 className="text-2xl md:text-4xl font-bold">
              Want tips % tricks to optimize your flow?
            </h1>
            <p className="md:text-lg">
              Sign Up to our newsletter and stay up-to-date.
            </p>
          </div>
          <div className="md:col-span-2">
            <form action="">
              <div className="flex">
                <input
                  className="px-2 py-[6px] text-black rounded mr-2 text-sm w-[160px] md:text-lg md:w-auto"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="btn text-sm w-[100px] md:text-lg md:w-auto">
                  Notify Me
                </button>
              </div>
            </form>
            <div className="mt-4">
              <p className="py-3">
                We care about the protection of your data. Read Our{" "}
                <a
                  href="/"
                  className="text-[#00df9a] underline hover:text-[#00724e]"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
