"use client";
import Header from "@/components/CreateLogo/Header";
import SideNav from "@/components/CreateLogo/SideNav";
import React from "react";

const page = () => {
  return (
    <div className="overflow-hidden h-screen">
      <Header />
      <div className="flex">
        <div className="w-64">
          <SideNav selectedIndex={(value) => console.log(value)} />
        </div>
        <div>body</div>
      </div>
    </div>
  );
};

export default page;
