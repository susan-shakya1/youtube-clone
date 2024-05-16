import SliderCatogories from "@/components/SliderText";
import Cards from "@/components/card";
import Menubar from "@/components/menubar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto ">
      <Menubar />
      <div className="overflow-auto px-4 pb-4">
        <div className="sticky top-0 p-2 pb-4 z-10 bg-bgColor">
          <SliderCatogories />
        </div>
        {/* <Cards /> */}
      </div>
    </div>
  );
}
