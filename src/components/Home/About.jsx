import Image from "next/image";
import React from "react";

const About = () => {
  const heading = [
    "User-Friendly Editor",
    "Quick and Efficient",
    "Cost-Effective Branding",
  ];

  return (
    <div className="flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center md:gap-0 gap-5 md:pl-20 pl-0 md:py-20 py-10 overflow-hidden">
      <div className="md:mt-20 mt-0 flex flex-col items-center justify-center">
        <h1 className="md:w-[400px] w-auto md:text-4xl text-3xl font-medium mb-10 md:ml-0 ml-8 text-[#030712]">
          Craft a Unique Brand Identity, Effortlessly
        </h1>
        {heading.map((text, index) => (
          <p
            key={index}
            className="p-5 mt-5 rounded-2xl text-xl md:w-[450px] w-[333px] border-[1px] bg-gray-100"
          >
            {text}
          </p>
        ))}
      </div>
      <div className="border-[12px] bg-gray-200 rounded-2xl md:-mr-32 -mr-0">
        <Image
          src="/bg.png"
          alt="bg"
          width={1000}
          height={1000}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
