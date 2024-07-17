import React from "react";

export const Hero = () => {
  return (
    <div className="hero py-5">
      <div className="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
        <div className="mb-14 lg:mb-0 lg:w-1/2 lg:pl-16">
          <h1 className="mx-w-xl text-3xl leading-none font-bold text-center lg:text-5xl lg:text-left lg:leading-tight mb-5">
            We Turn Your <span className="text-[#00D6A3]">Ideas</span> Into
            <span className="text-[#00D6A3]">Reality!</span>
          </h1>
          <p className="max-w-xl text-center text-gray-600 lg:text-left lg:max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-center mt-14 lg:justify-start">
            <button
              className="bg-pink-500 text-white py-2 px-4 rounded-lg text-center hover:bg-pink-400 ease-in-out duration-500"
              type={"button"}
            >
              Explore Now
            </button>
            <button
              className="ml-4 bg-gray-100 text-black-500 py-2 px-4 rounded-lg text-center hover:bg-gray-00 ease-in-out duration-500"
              type={"button"}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            className="ml-auto"
            src="/src/images/agency-hero.png"
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
};
