import {
  LucideFlag,
  LucideMessageSquare,
  LucidePaperclip,
  LucideUser2,
} from "lucide-react";
import Progress from "../Progress";

export const Card1 = () => {
  return (
    <div className="relative h-90 min-w-75 flex-1 overflow-y-scroll rounded-lg bg-white px-4 text-black scrollbar-hide dark:bg-boxdark dark:text-white">
      <h1 className="sticky top-0 bg-white py-4 text-xl font-semibold dark:bg-boxdark">
        TasK Progress
      </h1>
      <div className="pb-4">
        <div className="py-2">
          <div className="flex justify-between py-1">
            <h1 className="text-lg font-medium">UI/UX Design</h1>
            <p className="text-md">02/07</p>
          </div>
          <Progress percent={"30%"} color={"success"} />
        </div>
        <div className="py-2">
          <div className="flex justify-between py-1">
            <h1 className="text-lg font-medium">FrontEnd</h1>
            <p className="text-md">02/07</p>
          </div>
          <Progress percent={"50%"} color={"meta-1"} />
        </div>
        <div className="py-2">
          <div className="flex justify-between py-1">
            <h1 className="text-lg font-medium">Pentest</h1>
            <p className="text-md">02/07</p>
          </div>
          <Progress percent={"70%"} color={"secondary"} />
        </div>
        <div className="py-2">
          <div className="flex justify-between py-1">
            <h1 className="text-lg font-medium">UI/UX Design</h1>
            <p className="text-md">02/07</p>
          </div>
          <Progress percent={"40%"} color={"meta-6"} />
        </div>
        <div className="py-2">
          <div className="flex justify-between py-1">
            <h1 className="text-lg font-medium">FrontEnd</h1>
            <p className="text-md">02/07</p>
          </div>
          <Progress percent={"30%"} color={"boxdark"} />
        </div>
        <div className="py-2">
          <div className="flex justify-between py-1">
            <h1 className="text-lg font-medium">Pentest</h1>
            <p className="text-md">02/07</p>
          </div>
          <Progress percent={"80%"} color={"secondary"} />
        </div>
      </div>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="relative h-90 min-w-75 flex-1 overflow-y-scroll rounded-lg bg-white px-4 text-black scrollbar-hide dark:bg-boxdark dark:text-white">
      <h1 className="sticky top-0 bg-white py-4 text-xl font-semibold dark:bg-boxdark">
        Recent Activity
      </h1>
      <div>
        <div className="flex items-center gap-4 border-b border-slate-200 py-4 dark:border-slate-600">
          <h1 className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-black">
            AT
          </h1>
          <div>
            <p className="font-semibold">Abebe added new task</p>
            <p>10min ago</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-b border-slate-200 py-4 dark:border-slate-600">
          <h1 className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-black">
            AT
          </h1>
          <div>
            <p className="font-semibold">Abebe added deleted task</p>
            <p>10min ago</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-b border-slate-200 py-4 dark:border-slate-600">
          <h1 className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-black">
            AT
          </h1>
          <div>
            <p className="font-semibold">Abebe added new task</p>
            <p>10min ago</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-b border-slate-200 py-4 dark:border-slate-600">
          <h1 className="flex h-8 w-8 items-center justify-center rounded-full bg-meta-3 text-black">
            AT
          </h1>
          <div>
            <p className="font-semibold">Abebe added new task</p>
            <p>10min ago</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-b border-slate-200 py-4 dark:border-slate-600">
          <h1 className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-black">
            AT
          </h1>
          <div>
            <p className="font-semibold">Abebe added new task</p>
            <p>10min ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Card3 = () => {
  return (
    <div className="relative h-90 min-w-75 flex-1 overflow-y-scroll rounded-lg bg-white px-4 text-black scrollbar-hide dark:bg-boxdark dark:text-white">
      <h1 className="sticky top-0 bg-white py-4 text-xl font-semibold dark:bg-boxdark">
        Allocated Task Members
      </h1>
      <div>
        <div className="flex items-center justify-between border-b border-slate-200 py-4 dark:border-slate-600">
          <div className="flex items-center gap-4">
            <LucideUser2 />
            <div>
              <h2 className="text-lg font-semibold">Abebe Kebede</h2>
              <p className="text-small">UI/UX designer</p>
            </div>
          </div>
          <button className=" rounded-md bg-red px-4 py-2 text-gray">
            Remove
          </button>
        </div>
        <div className="flex items-center justify-between border-b border-slate-200 py-4 dark:border-slate-600">
          <div className="flex items-center gap-4">
            <LucideUser2 />
            <div>
              <h2 className="text-lg font-semibold">Abebe Kebede</h2>
              <p className="text-small">UI/UX designer</p>
            </div>
          </div>
          <button className=" rounded-md bg-red px-4 py-2 text-gray">
            Remove
          </button>
        </div>
        <div className="flex items-center justify-between border-b border-slate-200 py-4 dark:border-slate-600">
          <div className="flex items-center gap-4">
            <LucideUser2 />
            <div>
              <h2 className="text-lg font-semibold">Abebe Kebede</h2>
              <p className="text-small">UI/UX designer</p>
            </div>
          </div>
          <button className=" rounded-md bg-red px-4 py-2 text-gray">
            Remove
          </button>
        </div>
        <div className="flex items-center justify-between border-b border-slate-200 py-4 dark:border-slate-600">
          <div className="flex items-center gap-4">
            <LucideUser2 />
            <div>
              <h2 className="text-lg font-semibold">Abebe Kebede</h2>
              <p className="text-small">UI/UX designer</p>
            </div>
          </div>
          <button className=" rounded-md bg-red px-4 py-2 text-gray">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export const Card4 = ({ task, priority } : any) => {
  return (
    <div className="flex min-w-80 flex-col gap-4 rounded-md border-b-4 border-yellow-500 bg-whiter p-6 text-boxdark-2 shadow-card dark:bg-boxdark dark:text-gray md:p-4">
      <div className="flex items-center justify-between">
        <p className="font-lg rounded-md bg-secondary px-4 text-center text-lg">
          {task}
        </p>
        <h2 className="text-md rounded-md bg-yellow-500 px-2">{priority}</h2>
      </div>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima animi
          voluptatibus laborum fugiat!
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <LucideFlag size={15} />
          <p>22 Apr</p>
          <LucideMessageSquare size={15} />
          <p>4</p>
          <LucidePaperclip size={15} />
          <p>3</p>
        </div>
        <p className="rounded-md bg-meta-3 px-4 py-1">Social Media App</p>
      </div>
    </div>
  );
};
