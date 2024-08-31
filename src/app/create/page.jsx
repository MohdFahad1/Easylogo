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
        <Header
          DownloadIcon={setDownloadIcon}
          setSelectedIndex={setSelectedIndex}
        />
        <div className="flex">
          <div className="w-64 md:block hidden">
            <SideNav
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </div>
          <div className="flex w-full flex-col md:flex-row overflow-auto h-screen md:h-auto">
            <div className="w-full md:hidden justify-center items-center h-5/6 flex">
              <LogoPreview downloadIcon={downloadIcon} />
            </div>
            <div className="md:w-[450px] w-auto">
              {selectedIndex === 0 ? (
                <IconController />
              ) : (
                <BackgroundController />
              )}
            </div>
            <div className="w-full md:flex justify-center items-center h-5/6 hidden">
              <LogoPreview downloadIcon={downloadIcon} />
            </div>
          </div>
        </div>
      </div>
    </UpdateStorageProvider>
  );
};

export default Page;
