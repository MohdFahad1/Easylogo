import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { icons } from "lucide-react";
import { iconList } from "@/constants/icons";
import { useUpdateStorage } from "@/context/UpdateStorageContext";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";

const premiumIconList = Array.from(
  { length: 123 },
  (_, index) => `shape-${index + 1}.svg`
);

const IconList = ({ selectedIcon }) => {
  const { storageValue } = useUpdateStorage();
  const [openDialog, setOpenDialog] = useState(false);
  const [icon, setIcon] = useState(storageValue?.icon);
  const { isSignedIn } = useUser();
  const router = useRouter();

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    return LucidIcon ? <LucidIcon color={color} size={size} /> : null;
  };

  const handleIconClick = () => {
    if (isSignedIn) {
      setOpenDialog(true);
    } else {
      router.push("/sign-up");
    }
  };

  return (
    <div>
      <label>Icon</label>
      <div
        className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center"
        onClick={handleIconClick}
      >
        {storageValue.icon.startsWith("shape-") ? (
          <Image src={`/logos/${icon}`} alt={icon} height={30} width={30} />
        ) : (
          <Icon name={icon} />
        )}
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="w-[350px] md:w-[450px]">
          <DialogHeader className="w-[235px] md:w-[400px]">
            <DialogTitle>Pick your Favourite Icon</DialogTitle>

            <Tabs defaultValue="free-icons" className="w-[235px] md:w-[400px]">
              <TabsList>
                <TabsTrigger value="free-icons">Free Icons</TabsTrigger>
                <TabsTrigger value="premium-icons">Premium Icons</TabsTrigger>
              </TabsList>

              <TabsContent value="free-icons">
                <DialogDescription>
                  <div className="max-h-[400px] w-[300px] md:w-auto overflow-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 mt-5">
                    {iconList.map((icon, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center w-20 h-20 p-2 border-2 rounded-md cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                          selectedIcon(icon);
                          setOpenDialog(false);
                          setIcon(icon);
                        }}
                      >
                        <Icon name={icon} size={45} color={"#000"} />
                      </div>
                    ))}
                  </div>
                </DialogDescription>
              </TabsContent>

              <TabsContent value="premium-icons">
                <DialogDescription>
                  <div className="max-h-[400px] w-[300px] md:w-auto overflow-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 mt-5">
                    {premiumIconList.map((icon, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center w-20 h-20 p-2 bg-black border-2 rounded-md cursor-pointer hover:opacity-60"
                        onClick={() => {
                          selectedIcon(icon);
                          setOpenDialog(false);
                          setIcon(icon);
                        }}
                      >
                        <Image
                          src={`/logos/${icon}`}
                          alt={icon}
                          className="w-12 h-12"
                          width={10}
                          height={10}
                        />
                      </div>
                    ))}
                  </div>
                </DialogDescription>
              </TabsContent>
            </Tabs>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IconList;
