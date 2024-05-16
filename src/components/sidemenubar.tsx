import { Icons } from "@/data/menuData";

const Sidemenubar = () => {
  return (
    <div className="w-20 h-full p-2 bg-bgColor shadow-lg  flex flex-col gap-2 pt-2">
      {Icons.map((icon, index) => (
        <div
          key={index}
          className="flex flex-col items-center  justify-center gap-1 p-2 rounded-xl py-4 hover:bg-bgHover hover:duration-400 cursor-pointer "
        >
          <icon.icons size={22} />
          <p className="text-[8px]">{icon.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Sidemenubar;
