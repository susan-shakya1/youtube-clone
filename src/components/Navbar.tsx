"use client";
import { MenuIcon, Mic, Search } from "lucide-react";
import Image from "next/image";

import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";

const iconsHoverEffectStyle =
  "cursor-pointer p-2 hover:p-2 hover:bg-[#222222] rounded-3xl duration-300";

const Navbar = () => {
  const [clickSearch, setClickSearch] = useState(false);
  return (
    <div className="w-full flex h-[56px] px-5 sticky  top-0 left-0 items-center justify-between bg-bgColor ">
      <div className="flex justify-center items-center cursor-pointer">
        <div className={iconsHoverEffectStyle}>
          <MenuIcon />
        </div>
        <Image
          src="/youtube.svg"
          width={120}
          height={100}
          alt="Picture of the author"
        />
      </div>
      {/* outline-[#1C62B9] */}
      <div className="flex w-[50%] h-10 gap-4">
        <div className="flex w-full h-full ">
          {clickSearch ? (
            <div className="flex w-full h-full  rounded-l-3xl border border-[#1C62B9] ouline-none">
              <div className=" pl-3 bg-[#121212] border-none rounded-l-3xl flex items-center justify-center ">
                <Search size={16} />
              </div>
              <input
                type="text"
                className="bg-[#121212] w-full
            px-4  outline-none placeholder-gray-300"
                placeholder="search"
                onClick={() => {
                  setClickSearch(!clickSearch);
                }}
              />
            </div>
          ) : (
            <input
              type="text"
              className="bg-[#121212] w-full rounded-l-3xl
             px-4 border border-[#303030] outline-none placeholder-gray-300"
              placeholder="search"
              onClick={() => {
                setClickSearch(!clickSearch);
              }}
            />
          )}
          <div className=" px-4 bg-[#222222]  flex items-center justify-center rounded-r-3xl cursor-pointer">
            <Search size={20} />
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#222222] px-3 py-2 rounded-3xl cursor-pointer">
          <Mic size={18} />
        </div>
      </div>

      <div className="flex gap-6">
        <div className={iconsHoverEffectStyle}>
          <MdOutlineVideoCall size={26} />
        </div>
        <div className={iconsHoverEffectStyle}>
          <FaRegBell size={24} className="cursor-pointer" />
        </div>
        <div className={iconsHoverEffectStyle}>
          <CgProfile size={26} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
