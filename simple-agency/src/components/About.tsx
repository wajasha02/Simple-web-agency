import React from "react";

export const About = () => {
  return (
    <div className="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
      <div className="lg:w-1/2">
        <img
          className="ml-auto w-[600px]"
          src="/src/images/about-us.png"
          alt="hero image"
        />
      </div>
      <div className="mb-14 md:pt-32 lg:mt-[-150px] lg:w-1/2 lg:pl-16">
        <h2 className="mx-w-xl text-sm leading-none font-bold text-center text-[#00D6A3] lg:text-xl lg:text-left lg:leading-tight mb-1">
          About Us
        </h2>
        <h2 className="mx-w-xl text-2xl leading-none font-bold text-center lg:text-3xl lg:text-left lg:leading-tight mb-5">
          Who We Are?
        </h2>
        <p className="max-w-xl text-center text-gray-600 lg:text-left lg:max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore, sed do eiusmod
          tempor.
        </p>
      </div>
    </div>
  );
};
