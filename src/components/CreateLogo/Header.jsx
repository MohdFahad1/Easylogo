import React from "react";
import Logo from "../common/Logo";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="p-5 border-2 flex justify-between">
      <Logo />
      <Button className="bg-[#030712]">Download</Button>
    </header>
  );
};

export default Header;
