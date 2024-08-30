import React, { useEffect, useState } from "react";
import { Slider } from "../ui/slider";
import ColorPickerController from "./ColorPickerController";
import { useUpdateStorage } from "@/context/UpdateStorageContext";

const BackgroundController = () => {
  const { storageValue, setStorageValue } = useUpdateStorage();
  const [rounded, setRounded] = useState(storageValue.bgRounded);
  const [padding, setPadding] = useState(storageValue.bgPadding);
  const [color, setColor] = useState(storageValue.bgColor);

  useEffect(() => {
    setRounded(storageValue.bgRounded);
    setPadding(storageValue.bgPadding);
    setColor(storageValue.bgColor);
  }, [storageValue]);

  useEffect(() => {
    setStorageValue((prev) => ({
      ...prev,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    }));
  }, [rounded, padding, color, setStorageValue]);

  return (
    <div className="p-5 h-screen overflow-auto">
      <div>
        <div className="my-3">
          <label className="py-2 flex justify-between items-center">
            Rounded <span>{rounded} px</span>
          </label>
          <Slider
            defaultValue={[rounded]}
            max={220}
            step={1}
            className="my-2"
            onValueChange={(value) => setRounded(value[0])}
          />
        </div>
        <div className="my-3">
          <label className="py-2 flex justify-between items-center">
            Padding <span>{padding} px</span>
          </label>
          <Slider
            defaultValue={[padding]}
            max={80}
            step={1}
            className="my-2"
            onValueChange={(value) => setPadding(value[0])}
          />
        </div>
        <div className="mt-5 mb-24">
          <label className="mb-2">Background Color</label>
          <ColorPickerController
            hideController={false}
            selectedColor={(color) => setColor(color)}
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundController;
