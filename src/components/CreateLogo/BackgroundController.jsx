import React, { useState, useEffect } from "react";
import { Slider } from "../ui/slider";
import ColorPickerController from "./ColorPickerController";

const BackgroundController = () => {
  const [rounded, setRounded] = useState(0);
  const [padding, setPadding] = useState(50);
  const [color, setColor] = useState("#000");

  const storageValue = JSON.parse(localStorage.getItem("value"));

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };

    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [rounded, padding, color]);

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
            Rotate <span>{padding} px</span>
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
