import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 justify-center items-center p-20">
      <h1 className="text-4xl font-medium text-[#030712]">
        Start Building Your Brand Today!
      </h1>
      <p className="text-xl text-gray-500">
        No fees, no limitations, just pure creativity.
      </p>
      <Link href="/create">
        <Button className="text-xl font-medium p-7 bg-[#030712]">
          Create your logo - it&apos;s free
        </Button>
      </Link>
    </footer>
  );
};

export default Footer;
