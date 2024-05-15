"use client";
import { CatogoriesData } from "@/data/menuData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";

const Translate_Value = 200;

const SliderCatogories = () => {
  const [translate, setTranslate] = useState(0);
  const [isLeftArrowVisibile, setIsLeftArrowVisible] = useState(true);
  const [isRightArrowVisibile, setIRightArrowVisibile] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="overflow-hidden relative">
      <div
        className="flex gap-2 whitespace-nowrap transition-transform 
      "
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {CatogoriesData.map((data, index) => (
          <button
            className="bg-bgHover p-2 rounded-lg text-xs active:bg-gray-300 active:text-black "
            key={index}
          >
            {data}
          </button>
        ))}
      </div>
      {isLeftArrowVisibile && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-bgColor from-50% to-transparent w-20 h-full  ">
          <button
            className="h-full hover:bg-bgHover hover:duration-300 rounded-xl aspect-square p-1.5 w-auto"
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - Translate_Value;
                if (newTranslate <= 0) {
                  return 0;
                }
                return newTranslate;
              });
            }}
          >
            <ChevronLeft size={20} />
          </button>
        </div>
      )}
      {isRightArrowVisibile && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-bgColor from-50% to-transparent w-20 h-full flex justify-end ">
          <button
            className="h-full hover:bg-bgHover hover:duration-300 rounded-xl aspect-square p-1.5 w-auto"
            onClick={() => {
              setTranslate((translate) => {
                if (containerRef.current == null) {
                  return translate;
                }
                const newTranslate = translate + Translate_Value;
                const edge = containerRef.current.scrollWidth;
                const width = containerRef.current.clientWidth;
                console.log(
                  width,
                  "checking width",
                  edge,
                  "checking edge",
                  "newTranslate=",
                  newTranslate
                );
                if (newTranslate + width >= edge) {
                  return edge - width;
                }
                return newTranslate;
              });
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default SliderCatogories;
