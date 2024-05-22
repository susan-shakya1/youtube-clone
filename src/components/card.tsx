"use client";

import { CardDataStore } from "@/store/CardDataStore";
import { Card } from "flowbite-react";
import Image from "next/image";
import { CiMenuKebab } from "react-icons/ci";

const Cards = () => {
  const { CardDataState, setCardDataState } = CardDataStore();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 ">
      {CardDataState.map((data) => (
        <div
          className=" group min-w-[240px] flex flex-col gap-1  h-full overflow-hidden p-2 rounded-xl hover:bg-bgHover duration-500 cursor-pointer"
          key={data.id}
        >
          <div className="relative">
            <Image
              src={data.thumbnail}
              alt="Thumbnail"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              className="rounded-xl  group-hover:rounded-none"
            />
            <p className=" absolute p-1 bg-black bg-opacity-75 text-opacity-75 bottom-2 right-2 z-10 text-[10px] leading-tight">
              {data.time}
            </p>
          </div>
          <div className="w-auto h-auto flex gap-1 py-2">
            <div className="w-[10%]  ">
              <div className="w-7 h-7 rounded-2xl bg-white border-none ">
                <Image
                  src={data.profile}
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="  rounded-2xl object-cover "
                />
              </div>
            </div>

            <div className="flex flex-col w-[82%] gap-1 ">
              <h1 className="text-sm leading-tight ">{data.title}</h1>
              <p className="text-[#A2A2A2] text-xs">{data.channelName}</p>

              <p className="text-[#A2A2A2] text-xs">{data.views}</p>
            </div>
            <div className="w-[5%] hidden group-hover:block">
              <CiMenuKebab />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cards;
