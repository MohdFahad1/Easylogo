import React from "react";
import Logo from "../common/Logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { Download, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideNav from "./SideNav";

const Header = ({ DownloadIcon, setSelectedIndex }) => {
  return (
    <header className="p-5 border-2 flex justify-between items-center">
      <Link href="/" className="md:block hidden">
        <Logo />
      </Link>
      <div className="md:hidden block">
        <Sheet>
          <SheetTrigger>
            <Menu size={28} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-left">Select your Tab</SheetTitle>
              <SheetDescription>
                <SideNav setSelectedIndex={setSelectedIndex} />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <Button
        className="bg-[#030712] flex justify-center items-center gap-2"
        onClick={() => DownloadIcon(Date.now())}
      >
        <Download size={18} />
        Download
      </Button>
    </header>
  );
};

export default Header;
