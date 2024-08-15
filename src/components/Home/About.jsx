import Image from "next/image";
import React from "react";

const About = () => {
  const heading = [
    "User-Friendly Editor",
    "Quick and Efficient",
    "Cost-Effective Branding",
  ];

  return (
    <div className="flex justify-between pl-20 py-20 overflow-hidden">
      <div className="mt-20">
        <h1 className="w-[400px] text-4xl font-medium mb-10 text-[#030712]">
          Craft a Unique Brand Identity, Effortlessly
        </h1>
        {heading.map((text, index) => (
          <p
            key={index}
            className="p-5 mt-5 rounded-2xl text-xl w-[450px] border-[1px] bg-gray-100"
          >
            {text}
          </p>
        ))}
      </div>
      <div className="border-[12px] bg-gray-200 rounded-2xl -mr-44">
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
