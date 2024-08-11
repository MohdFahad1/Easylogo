import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <Image src="/logo.png" alt="logo" height={45} width={45} />
      <h3 className="text-[28px] font-bold">EasyLogo</h3>
    </div>
  );
};

export default Logo;
