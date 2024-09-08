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
  const [downloadIcon, setDownloadIcon] = useState(null);

  return (
    <UpdateStorageProvider>
      <div className="max-h-screen overflow-hidden">
        <Header
          DownloadIcon={setDownloadIcon}
          setSelectedIndex={setSelectedIndex}
        />
        <div className="flex">
          <div className="hidden w-64 md:block">
            <SideNav
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </div>
          <div className="flex flex-col w-full h-screen overflow-auto md:flex-row md:h-auto">
            <div className="flex items-center justify-center w-full md:hidden h-5/6">
              <LogoPreview downloadIcon={downloadIcon} />
            </div>
            <div className="md:w-[450px] w-auto">
              {selectedIndex === 0 ? (
                <IconController />
              ) : (
                <BackgroundController />
              )}
            </div>
            <div className="items-center justify-center hidden w-full md:flex h-5/6">
              <LogoPreview downloadIcon={downloadIcon} />
            </div>
          </div>
        </div>
      </div>
    </UpdateStorageProvider>
  );
};

export default Page;
