import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { icons } from "lucide-react";
import React, { useState, useEffect, useContext } from "react";

const LogoPreview = () => {
  const [storageValue, setStorageValue] = useState(null);
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));

    setStorageValue(storageData);
  }, [updateStorage]);

  if (!storageValue) {
    return <div>Loading...</div>;
  }

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];

    if (!LucidIcon) {
      return;
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      />
    );
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div
        className="rounded-md flex items-center justify-center outline-dotted outline-gray-300 h-[500px] w-[500px]"
        style={{
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded || "0px",
            background: storageValue?.bgColor || "#000",
          }}
        >
          <Icon
            name={storageValue?.icon}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
