import React from "react";

export const Services = () => {
  return (
    <div className=" container min-h-screen max-w-full md:bg-pink-100 flex flex-wrap items-center justify-center py-10 rounded-t-[100px]  ">
      <div className="mb-14 lg:mb-0 lg:w-1/2 lg:pl-16 ">
        <h2 className="mx-w-xl text-sm leading-none font-bold text-center text-[#00D6A3] lg:text-xl lg:leading-tight mb-1">
          Our Services
        </h2>
        <h2 className="mx-w-xl text-2xl leading-none font-bold text-center lg:text-3xl lg:leading-tight mb-5">
          Explore Our Services
        </h2>
        <p className="max-w-xl text-center text-gray-600 lg:max-w-md m-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temporet doloreipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-10">
        <div className="rounded-lg shadow-lg max-w-80">
          <div className="rounded-lg p-5 flex flex-col border border-green-400 text-center">
            <div className="rounded-lg overflow-hidden text-center">
              <img
                className=" text-center"
                src="/src/images/web-design.png"
                alt="web design image"
              />
            </div>
            <h5 className="text-xs md:text-xl font-medium mt-5">Web Design</h5>
            <p className="text-gray-600 mt-2 text-[0.85rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga eos
              odit beatae.
            </p>
            <a
              href="#"
              className="text-center bg-[#00D6A3] p-2 rounded-lg mt-4 hover:bg-[#3be3bc] transition-all ease-in-out duration-200"
            >
              Explore
            </a>
          </div>
        </div>
        <div className="rounded-lg shadow-lg max-w-80">
          <div className="rounded-lg p-5 flex flex-col border border-green-400 text-center">
            <div className="rounded-lg overflow-hidden text-center">
              <img
                className=" text-center"
                src="/src/images/web-design.png"
                alt="web design image"
              />
            </div>
            <h5 className="text-xs md:text-xl font-medium mt-5">Web Design</h5>
            <p className="text-gray-600 mt-2 text-[0.85rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga eos
              odit beatae.
            </p>
            <a
              href="#"
              className="text-center bg-[#00D6A3] p-2 rounded-lg mt-4 hover:bg-[#3be3bc] transition-all ease-in-out duration-200"
            >
              Explore
            </a>
          </div>
        </div>
        <div className="rounded-lg shadow-lg max-w-80">
          <div className="rounded-lg p-5 flex flex-col border border-green-400 text-center">
            <div className="rounded-lg overflow-hidden text-center">
              <img
                className=" text-center"
                src="/src/images/web-design.png"
                alt="web design image"
              />
            </div>
            <h5 className="text-xs md:text-xl font-medium mt-5">Web Design</h5>
            <p className="text-gray-600 mt-2 text-[0.85rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga eos
              odit beatae.
            </p>
            <a
              href="#"
              className="text-center bg-[#00D6A3] p-2 rounded-lg mt-4 hover:bg-[#3be3bc] transition-all ease-in-out duration-200"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
