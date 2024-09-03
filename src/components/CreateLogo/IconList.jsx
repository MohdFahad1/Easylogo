import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { icons } from "lucide-react";
import { iconList } from "@/constants/icons";
import { useUpdateStorage } from "@/context/UpdateStorageContext";
import { useUser } from "@clerk/nextjs";
import { SignUp } from "@clerk/nextjs";

const IconList = ({ selectedIcon }) => {
  const { storageValue } = useUpdateStorage();
  const [openDialog, setOpenDialog] = useState(false);
  const [icon, setIcon] = useState(storageValue?.icon);
  const { user } = useUser();
  const [showSignUp, setShowSignUp] = useState(false);

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    return LucidIcon ? <LucidIcon color={color} size={size} /> : null;
  };

  const handleClick = () => {
    if (!user) {
      setShowSignUp(true); // Show the sign-up component
    } else {
      setOpenDialog(true);
    }
  };

  return (
    <div>
      <label>Icon</label>
      <div
        className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center"
        onClick={handleClick}
      >
        <Icon name={icon} />
      </div>
      {showSignUp && <SignUp routing="hash" />}

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
    </div>
  );
};

export default IconList;
