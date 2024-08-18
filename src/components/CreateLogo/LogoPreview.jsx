import { UpdateStorageContext } from "@/context/UpdateStorageContext";
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

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="rounded-md flex items-center justify-center outline-dotted outline-gray-300 h-[500px] w-[500px]">
        <div
          className="h-full w-full"
          style={{
            borderRadius: storageValue?.bgRound,
            background: storageValue?.bgColor,
          }}
        >
          Icon Preview
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
