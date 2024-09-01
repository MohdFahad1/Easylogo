import React, { useState } from "react";
import Logo from "../common/Logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { Download, Menu } from "lucide-react";
import SideNav from "./SideNav";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

const Header = ({ DownloadIcon, setSelectedIndex }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogView, setDialogView] = useState("create-account");

  return (
    <header className="p-5 border-2 flex justify-between items-center">
      <Link href="/" className="md:block hidden">
        <Logo />
      </Link>
      <div className="md:hidden block">
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            className="bg-[#030712] flex justify-center items-center gap-2"
            // onClick={() => setDialogView("create-account")}
            onClick={() => DownloadIcon(Date.now())}
          >
            <Download size={18} />
            Download
          </Button>
        </DialogTrigger>
        <DialogContent className="p-10">
          <DialogHeader>
            {dialogView === "create-account" ? (
              <>
                <DialogTitle className="text-2xl mb-3">
                  You need to be logged in to save your logo.
                </DialogTitle>
                <DialogDescription className="text-lg">
                  Enter your email to create an account and get access to your
                  new logo.
                </DialogDescription>
              </>
            ) : (
              <>
                <DialogTitle className="text-2xl mb-3">
                  You need to be logged in to save your logo.
                </DialogTitle>
                <DialogDescription className="text-lg">
                  Enter your email to create an account and get access to your
                  new logo.
                </DialogDescription>
              </>
            )}
          </DialogHeader>
          <div>
            {dialogView === "create-account" ? (
              <>
                <Input placeholder="you@example.com" className="py-6 text-lg" />
                <Button type="submit" className="w-full text-lg py-6 mt-5">
                  Create account
                </Button>
              </>
            ) : (
              <>
                <Input placeholder="you@example.com" className="py-6 text-lg" />
                <Button type="submit" className="w-full text-lg py-6 mt-5">
                  Sign In
                </Button>
              </>
            )}
          </div>
          <DialogFooter>
            <p className="text-center w-full">
              {dialogView === "create-account" ? (
                <>
                  Already have an account?{" "}
                  <span
                    className="hover:underline cursor-pointer"
                    onClick={() => setDialogView("sign-in")}
                  >
                    Sign In
                  </span>
                </>
              ) : (
                <>
                  Don&apos;t have an account?{" "}
                  <span
                    className="hover:underline cursor-pointer"
                    // onClick={() => setDialogView("create-account")}
                  >
                    Create Account
                  </span>
                  <DialogDescription>
                    <p className="mt-5 text-lg">
                      By signing up, you agree to the Terms of Service and
                      Privacy Policy
                    </p>
                  </DialogDescription>
                </>
              )}
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
