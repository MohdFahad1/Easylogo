import React from "react";
import Logo from "../common/Logo";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="md:p-10 p-5 flex flex-col justify-center items-center">
      <div>
        <Logo />
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-8 mt-20">
        <h1 className="md:text-7xl text-4xl font-semibold md:w-[800px] w-auto text-[#030712]">
          Get Your Stunning Logo Instantly, For Free!
        </h1>
        <p className="text-xl text-gray-500 md:w-[500px] w-auto">
          Craft a stunning logo in seconds, no costs, no catch - pure
          creativity.
        </p>
        <Link href="/create">
          <Button className="text-xl font-medium p-7 bg-[#030712]">
            Create your logo - it&apos;s free
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Hero;
