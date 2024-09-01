import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { icons, Swords } from "lucide-react";
import { iconList } from "@/constants/icons";
import { useUpdateStorage } from "@/context/UpdateStorageContext";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const IconList = ({ selectedIcon }) => {
  const { storageValue, setStorageValue } = useUpdateStorage();
  const [openDialog, setOpenDialog] = useState(false);
  const [icon, setIcon] = useState(storageValue?.icon);
  const [dialogView, setDialogView] = useState("create-account");

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    return LucidIcon ? <LucidIcon color={color} size={size} /> : null;
  };

  return (
    <div>
      <label>Icon</label>
      <div
        className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center"
        onClick={() => setOpenDialog(true)}
      >
        <Icon name={icon} />
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pick your Favourite Icon</DialogTitle>
            <DialogDescription>
              <div className="max-h-[400px] overflow-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-5">
                {iconList.map((icon, index) => (
                  <div
                    key={index}
                    className="border-2 w-10 flex justify-center items-center p-2 rounded-md cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      selectedIcon(icon);
                      setOpenDialog(false);
                      setIcon(icon);
                    }}
                  >
                    <Icon name={icon} size={20} color={"#000"} />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="p-10">
          <DialogHeader>
            {dialogView === "create-account" ? (
              <>
                <DialogTitle className="text-2xl mb-3">
                  You need to be logged to choose a shape.
                </DialogTitle>
                <DialogDescription className="text-lg">
                  Enter your email to create an account and get access to your
                  new logo.
                </DialogDescription>
              </>
            ) : (
              <>
                <DialogTitle className="text-2xl mb-3">
                  You need to be logged to choose a shape.
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
                    onClick={() => setDialogView("create-account")}
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
      </Dialog> */}
    </div>
  );
};

export default IconList;
