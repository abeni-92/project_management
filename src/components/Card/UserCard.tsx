import {
  LucideBarChart,
  LucideList,
  LucidePlusCircle,
  LucideStar,
  LucideUser,
} from "lucide-react";
import Image from "next/image";

export const UserCard = () => {
  return (
    <div className="flex-1 min-w-100 flex bg-white p-6 text-black dark:bg-boxdark dark:text-white">
      <div className="flex flex-col gap-6 pr-6 border-r border-slate-300 dark:border-slate-600">
        <Image
          src="/images/user/user-01.png"
          alt="img"
          width={50}
          height={50}
          className="h-30 w-45"
        />
        <div className=" flex justify-between gap-4">
          <div className="flex flex-col gap-1">
            <LucideList />
            <p>4</p>
          </div>
          <div className="flex flex-col gap-1">
            <LucideStar />
            <p>4.5</p>
          </div>
          <div className="flex flex-col gap-1">
            <LucideBarChart />
            <p>03</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 pl-6">
        <div className="border-b border-slate-300 pb-4 dark:border-slate-600">
          <h2 className="font-bold">Luke Short</h2>
          <p className="inline-block bg-meta-6 p-1 text-sm rounded-sm font-medium dark:bg-primary">
            UI/UX Designer
          </p>
        </div>
        <p className="text-sm sm:text-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id debitis
          delectus eligendi reiciendis sunt sequi adipisci!
        </p>
        <div className="flex gap-2">
          <p className="flex items-center gap-2 rounded-md bg-blue-300 py-1 px-3 cursor-pointer dark:bg-meta-5">
            <LucidePlusCircle size={20} /> Assign Task
          </p>
          <p className="flex items-center gap-2 rounded-md bg-blue-300 py-1 px-3 cursor-pointer dark:bg-meta-5">
            <LucideUser size={20} /> Profile
          </p>
        </div>
      </div>
    </div>
  );
};
