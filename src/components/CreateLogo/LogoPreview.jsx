// LogoPreview.jsx
import React from "react";
import { icons } from "lucide-react";
import { useUpdateStorage } from "@/context/UpdateStorageContext";

const LogoPreview = () => {
  const { storageValue } = useUpdateStorage();

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    return LucidIcon ? (
      <LucidIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    ) : null;
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div
        className="rounded-md flex items-center justify-center outline-dotted outline-gray-300 h-[500px] w-[500px]"
        style={{ padding: storageValue.bgPadding }}
      >
        <div
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: storageValue.bgRounded,
            background: storageValue.bgColor,
          }}
        >
          <Icon
            name={storageValue.icon}
            color={storageValue.iconColor}
            size={storageValue.iconSize}
            rotate={storageValue.iconRotate}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
