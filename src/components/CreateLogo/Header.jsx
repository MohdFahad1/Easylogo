import React from "react";
import Logo from "../common/Logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <header className="p-5 border-2 flex justify-between">
      <Link href="/">
        <Logo />
      </Link>
      <Button className="bg-[#030712] flex justify-center items-center gap-2">
        <Download size={18} />
        Download
      </Button>
    </header>
  );
};

export default Header;
