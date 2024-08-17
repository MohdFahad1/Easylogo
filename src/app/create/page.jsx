"use client";
import BackgroundController from "@/components/CreateLogo/BackgroundController";
import Header from "@/components/CreateLogo/Header";
import IconController from "@/components/CreateLogo/IconController";
import SideNav from "@/components/CreateLogo/SideNav";
import React, { useState } from "react";

const page = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
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
          <div className="w-full bg-red-100">icon</div>
        </div>
      </div>
    </div>
  );
};

export default page;
