import React, { useEffect, useState } from "react";
import { Slider } from "../ui/slider";
import ColorPickerController from "./ColorPickerController";
import { useUpdateStorage } from "@/context/UpdateStorageContext";
import IconList from "./IconList";
import Image from "next/image";

const IconController = () => {
  const { storageValue, setStorageValue } = useUpdateStorage();
  const [size, setSize] = useState(storageValue.iconSize);
  const [rotate, setRotate] = useState(storageValue.iconRotate);
  const [color, setColor] = useState(storageValue.iconColor);
  const [icon, setIcon] = useState(storageValue.icon);

  useEffect(() => {
    setSize(storageValue.iconSize);
    setRotate(storageValue.iconRotate);
    setColor(storageValue.iconColor);
  }, [storageValue]);

  useEffect(() => {
    setStorageValue((prev) => ({
      ...prev,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: icon,
    }));
  }, [size, rotate, color, icon, setStorageValue]);

  return (
    <div className="h-auto p-5 overflow-auto md:h-screen">
      <div>
        <IconList selectedIcon={(icon) => setIcon(icon)} />
        <div className="my-3">
          <label className="flex items-center justify-between py-2">
            Size <span>{size} px</span>
          </label>
          <Slider
            defaultValue={[size]}
            max={512}
            step={1}
            className="my-2"
            onValueChange={(value) => setSize(value[0])}
          />
        </div>
        <div className="my-3">
          <label className="flex items-center justify-between py-2">
            Rotate <span>{rotate} &deg;</span>
          </label>
          <Slider
            defaultValue={[rotate]}
            max={360}
            step={1}
            className="my-2"
            onValueChange={(value) => setRotate(value[0])}
          />
        </div>
        <div className="mt-5 mb-24">
          <label className="mb-2">Icon Color</label>
          <ColorPickerController
            hideController={true}
            selectedColor={(color) => setColor(color)}
          />
        </div>
      </div>
    </div>
  );
};

export default IconController;
