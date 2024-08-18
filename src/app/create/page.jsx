"use client";
import BackgroundController from "@/components/CreateLogo/BackgroundController";
import Header from "@/components/CreateLogo/Header";
import IconController from "@/components/CreateLogo/IconController";
import LogoPreview from "@/components/CreateLogo/LogoPreview";
import SideNav from "@/components/CreateLogo/SideNav";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import React, { useState } from "react";

const page = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div className="max-h-screen overflow-hidden">
        <Header />
        <div className="flex">
          <div className="w-64">
            <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
          </div>
          <div className="flex w-full">
            <div className="w-[450px]">
              {selectedIndex === 0 ? (
                <IconController />
              ) : (
                <BackgroundController />
              )}
            </div>
            <div className="w-full flex justify-center items-center h-5/6">
              <LogoPreview />
            </div>
          </div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
};

export default page;
