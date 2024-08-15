import React from "react";
import Logo from "../common/Logo";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <main className="p-10 flex flex-col justify-center items-center">
      <div>
        <Logo />
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-8 mt-20">
        <h1 className="text-7xl font-semibold w-[800px]">
          Get Your Stunning Logo Instantly, For Free!
        </h1>
        <p className="text-xl text-gray-500 w-[500px]">
          Craft a stunning logo in seconds, no costs, no catch - pure
          creativity.
        </p>
        <Button className="text-xl font-medium p-7">
          Create your logo - it&apos;s free
        </Button>
      </div>
    </main>
  );
};

export default Hero;
