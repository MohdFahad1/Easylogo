import React, { createContext, useState, useContext } from "react";

const UpdateStorageContext = createContext();

export const UpdateStorageProvider = ({ children }) => {
  const [storageValue, setStorageValue] = useState({
    bgRounded: 0,
    bgPadding: 50,
    bgColor: "#000",
    icon: "Swords",
    iconColor: "#fff",
    iconSize: 280,
    iconRotate: 0,
  });

  return (
    <UpdateStorageContext.Provider value={{ storageValue, setStorageValue }}>
      {children}
    </UpdateStorageContext.Provider>
  );
};

export const useUpdateStorage = () => useContext(UpdateStorageContext);
