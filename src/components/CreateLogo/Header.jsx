import React, { useState } from "react";
import Logo from "../common/Logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { Download, Menu } from "lucide-react";
import SideNav from "./SideNav";
import { useUser, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = ({ DownloadIcon, setSelectedIndex }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleDownloadIcon = () => {
    DownloadIcon(Date.now());
  };

  const handleIconClick = () => {
    if (isSignedIn) {
      handleDownloadIcon();
    } else {
      router.push("/sign-up");
    }
  };

  return (
    <header className="flex items-center justify-between p-5 border-2">
      <Link href="/" className="hidden md:block">
        <Logo />
      </Link>
      <div className="block md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger>
            <Menu size={28} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="text-left">Select your Tab</SheetTitle>
              <SheetDescription>
                <SideNav
                  setSelectedIndex={(index) => {
                    setSelectedIndex(index);
                    setIsSheetOpen(false);
                  }}
                />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex gap-5">
        {isSignedIn ? <UserButton /> : null}
        <Button
          className="bg-[#030712] flex justify-center items-center gap-2"
          onClick={handleIconClick}
        >
          <Download size={18} />
          Download
        </Button>
      </div>
    </header>
  );
};

export default Header;
