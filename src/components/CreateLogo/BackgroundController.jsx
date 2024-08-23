import React, { useState, useEffect, useContext } from "react";
import { Slider } from "../ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

const BackgroundController = () => {
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
  const [storageValue, setStorageValue] = useState(null);

  const [rounded, setRounded] = useState(
    storageValue ? storageValue?.bgRounded : 0
  );
  const [padding, setPadding] = useState(
    storageValue ? storageValue?.bgPadding : 50
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.bgColor : "#000"
  );

  useEffect(() => {
    const storedValue = localStorage.getItem("value");
    if (storedValue) {
      const parsedValue = JSON.parse(storedValue);
      setStorageValue(parsedValue);
      setRounded(parsedValue?.bgRounded || 0);
      setPadding(parsedValue?.bgPadding || 50);
      setColor(parsedValue?.bgColor || "#000");
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
            defaultValue={[rounded]}
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
            defaultValue={[padding]}
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
