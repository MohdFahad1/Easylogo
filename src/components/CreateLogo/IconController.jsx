import { Smile, Swords } from "lucide-react";
import React, { useState } from "react";
import { Slider } from "../ui/slider";
import ColorPickerController from "./ColorPickerController";

const IconController = () => {
  const [size, setSize] = useState(210);
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState("#fff");

  return (
    <div className="p-5 h-screen overflow-auto">
      <div>
        <label>Icon</label>
        <div className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center">
          <Swords />
        </div>
        <div className="my-3">
          <label className="py-2 flex justify-between items-center">
            Size <span>{size} px</span>
          </label>
          <Slider
            value={[size]}
            max={512}
            step={1}
            className="my-2"
            onValueChange={(value) => setSize(value[0])}
          />
        </div>
        <div className="my-3">
          <label className="py-2 flex justify-between items-center">
            Rotate <span>{rotate} &deg;</span>
          </label>
          <Slider
            value={[rotate]}
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
