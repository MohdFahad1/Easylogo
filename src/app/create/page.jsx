"use client";
import React, { useState } from "react";
import BackgroundController from "@/components/CreateLogo/BackgroundController";
import Header from "@/components/CreateLogo/Header";
import IconController from "@/components/CreateLogo/IconController";
import LogoPreview from "@/components/CreateLogo/LogoPreview";
import SideNav from "@/components/CreateLogo/SideNav";
import { UpdateStorageProvider } from "@/context/UpdateStorageContext";

const Page = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [downloadIcon, setDownloadIcon] = useState();

  return (
    <UpdateStorageProvider>
      <div className="max-h-screen overflow-hidden">
        <Header DownloadIcon={setDownloadIcon} />
        <div className="flex">
          <div className="w-64">
            <SideNav selectedIndex={setSelectedIndex} />
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
              <LogoPreview downloadIcon={downloadIcon} />
            </div>
          </div>
        </div>
      </div>
    </UpdateStorageProvider>
  );
};

export default Page;
