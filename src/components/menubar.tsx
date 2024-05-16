"use client";

import React, { useState } from "react";
import {
  ExploreData,
  MainMenuData,
  SubcriptionsChannelData,
  YouMenuData,
  YouTubeType,
  settingData,
} from "../data/menuData";
import { MdArrowForwardIos, MdHistory } from "react-icons/md";
import Image from "next/image";
import { FaFire } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import Sidemenubar from "./sidemenubar";
import { MenuStore } from "@/store/useStateStore";

const menubtnStyle =
  "flex items-center px-3 py-2 gap-4 cursor-pointer w-full hover:bg-[#272727] duration-300 rounded-xl active:bg-[#272727]";
const menubtnTextStyle = "text-sm tracking-tight";

const Menubar = () => {
  const { modal, setModal } = MenuStore();
  return (
    <>
      {modal ? (
        <div className="w-60   flex flex-col gap-2 shadow-sm text-textColor overflow-y-auto ">
          <div className="w-full h-full flex flex-col gap-3  py-2 overflow-y-auto">
            <div className="flex flex-col mx-3 gap-1">
              {MainMenuData.map((data, index) => (
                <div className={menubtnStyle} key={index}>
                  <data.icons size={22} />
                  <h1 className={menubtnTextStyle}>{data.name}</h1>
                </div>
              ))}
            </div>
            {/* this is the underline div */}
            <hr className="border-gray-600" />

            {/* this is the YOU div part wrapper */}
            <div className="flex flex-col mx-3 gap-1">
              <div className="flex gap-2 items-center px-3 py-2 cursor-pointer hover:bg-[#272727] duration-300 rounded-xl">
                <h1 className="text-sm tracking-tight font-semibold">You</h1>
                <MdArrowForwardIos size={12} />
              </div>
              {YouMenuData.map((data, index) => (
                <div className={menubtnStyle} key={index}>
                  <data.icons size={22} />
                  <h1 className={menubtnTextStyle}>{data.name}</h1>
                </div>
              ))}
            </div>
            {/* this is the underline div */}
            <hr className="border-gray-600" />
            <div className="flex flex-col mx-3 gap-1">
              <h1 className="text-sm px-3 py-2 tracking-tight font-semibold">
                Subscirptions
              </h1>
              {SubcriptionsChannelData.map((data, index) => (
                <div className={menubtnStyle} key={index}>
                  <Image
                    src={data.img}
                    alt="logo"
                    width={26}
                    height={16}
                    className="rounded-xl"
                  />
                  <h1 className={menubtnTextStyle}>{data.name}</h1>
                </div>
              ))}
            </div>
            {/* this the hr line */}
            <hr className="border-gray-600" />
            <div className="flex flex-col mx-3 gap-1">
              <h1 className="text-sm px-3 py-1 tracking-tight font-semibold">
                Explore
              </h1>
              {ExploreData.map((data, index) => (
                <div className={menubtnStyle} key={index}>
                  <data.icons size={22} />
                  <h1 className={menubtnTextStyle}>{data.name}</h1>
                </div>
              ))}
            </div>
            {/* {this is the hr line} */}
            <hr className="border-gray-600" />
            <div className="flex flex-col mx-3 gap-1">
              <h1 className="text-sm px-3 py-1 tracking-tight font-semibold">
                More from YouTube
              </h1>
              {YouTubeType.map((data, index) => (
                <div className={menubtnStyle} key={index}>
                  <Image
                    src={data.img}
                    alt="logo"
                    width={22}
                    height={16}
                    className="rounded-xl"
                  />
                  <h1 className={menubtnTextStyle}>{data.name}</h1>
                </div>
              ))}
            </div>
            <hr className="border-gray-600" />
            <div className="flex flex-col mx-3 gap-1">
              {settingData.map((data, index) => (
                <div className={menubtnStyle} key={index}>
                  <data.icons />
                  <h1 className={menubtnTextStyle}>{data.name}</h1>
                </div>
              ))}
            </div>
            <hr className="border-gray-600" />
            <div className="flex flex-col mx-3 gap-3">
              <div className="flex flex-col mx-3 gap-1">
                <span className="text-xs text-[#aaaaaa]">
                  About Press Copyright
                </span>
                <span className="text-xs text-[#aaaaaa]">
                  contact us Creators
                </span>
                <span className="text-xs text-[#aaaaaa]">
                  Advertise Developers
                </span>
              </div>
              <div className="flex flex-col mx-3 gap-1">
                <span className="text-xs text-[#aaaaaa]">
                  About Press Copyright
                </span>
                <span className="text-xs text-[#aaaaaa]">
                  contact us Creators
                </span>
                <span className="text-xs text-[#aaaaaa]">
                  Advertise Developers
                </span>
              </div>
              <h1 className="text-sm text-[#aaaaaa] pl-2 ">
                @ 2024 Google LLC
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <Sidemenubar />
      )}
    </>
  );
};

export default Menubar;
