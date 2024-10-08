import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <Image src="/logo.png" alt="logo" height={43} width={43} />
      <h3 className="text-[28px] font-bold text-[#030712]">EasyLogo</h3>
    </div>
  );
};

export default Logo;
