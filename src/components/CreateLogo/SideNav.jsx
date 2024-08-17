"use client";
import React, { useState } from "react";
import { Image, PencilRuler, Shield } from "lucide-react";

const SideNav = ({ selectedIndex }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];

  return (
    <div className="border shadow-sm h-screen px-2">
      <div>
        {menuList.map((menu, index) => (
          <h2
            key={index}
            className={`flex items-center gap-2 p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer hover:bg-[#030712] rounded-md hover:text-white ${
              activeIndex === index && "bg-[#030712] text-white"
            } `}
            onClick={() => {
              setActiveIndex(index);
              selectedIndex(index);
            }}
          >
            <menu.icon size={20} />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
