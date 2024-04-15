"use client";
import Link from "next/link";
import { LucideHome, LucideUserCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const HorizontalNav = () => {
	const pathname = usePathname();
  return (
    <div className="bg-gray-800 flex w-full items-center justify-between gap-5 self-stretch font-bold bg-black px-8 py-6 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className={clsx('group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-bold text-bodydark2 duration-300 ease-in-out hover:bg-graydark hover:text-white dark:bg-meta-4', {'!text-white bg-graydark' : pathname == "/" })}
        >
          <LucideHome color="white" size={25} />
        </Link>
      </div>
      <ul className="my-auto flex justify-between gap-10 self-stretch whitespace-nowrap text-lg font-bold text-white max-md:max-w-full max-md:flex-wrap">
        <li>
          <Link
            href="/accounting"
            className={clsx('group relative flex items-center gap-2.5 rounded-md px-4 py-2 duration-300 ease-in-out hover:bg-graydark hover:text-white dark:bg-meta-4', {'!text-white bg-graydark' : pathname == "/accounting" })}
			>
            Accounting
          </Link>
        </li>
        <li>
          <Link
            href="/operations"
            className={clsx('group relative flex items-center gap-2.5 rounded-md px-4 py-2 duration-300 ease-in-out hover:bg-graydark hover:text-white dark:bg-meta-4', {'!text-white bg-graydark' : pathname == "/operations" })}
          >
            Operations
          </Link>
        </li>
        <li>
          <Link
            href="/audit"
            className={clsx('group relative flex items-center gap-2.5 rounded-md px-4 py-2 duration-300 ease-in-out hover:bg-graydark hover:text-white dark:bg-meta-4', {'!text-white bg-graydark' : pathname == "/audit" })}
          >
            Audit
          </Link>
        </li>
        <li>
          <Link
            href="/monitor"
            className="group relative flex items-center gap-2.5 rounded-md px-4 py-2 duration-300 ease-in-out hover:bg-graydark hover:text-white dark:bg-meta-4"
          >
            Monitor
          </Link>
        </li>
      </ul>
      <LucideUserCircle size={30} color="#80CAEE" className="cursor-pointer" />
    </div>
  );
};

export default HorizontalNav;
