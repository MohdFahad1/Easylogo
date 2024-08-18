import React, { useState, useEffect, useContext } from "react";
import { Slider } from "../ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

const BackgroundController = () => {
  const [rounded, setRounded] = useState(0);
  const [padding, setPadding] = useState(50);
  const [color, setColor] = useState("#000");
  const [storageValue, setStorageValue] = useState(null);
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("value");
      if (storedValue) {
        setStorageValue(JSON.parse(storedValue));
      }
    }
  }, []);

  useEffect(() => {
    if (storageValue !== null) {
      const updatedValue = {
        ...storageValue,
        bgRounded: rounded,
        bgPadding: padding,
        bgColor: color,
      };
      setUpdateStorage(updatedValue);
      localStorage.setItem("value", JSON.stringify(updatedValue));
    }
  }, [rounded, padding, color, storageValue]);

  return (
    <div className="p-5 h-screen overflow-auto">
      <div>
        <div className="my-3">
          <label className="py-2 flex justify-between items-center">
            Rounded <span>{rounded} px</span>
          </label>
          <Slider
            value={[rounded]}
            max={512}
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
            value={[padding]}
            max={100}
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
