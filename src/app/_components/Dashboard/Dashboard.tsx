"use client";

import CardDataStats from "@/components/CardDataStats";
import ChartOne from "@/components/Charts/ChartOne";
import ChartThree from "@/components/Charts/ChartThree";
import ChartTwo from "@/components/Charts/ChartTwo";
import { TableAgGrid } from "@/components/Tables/TableAgGrid";
import React, { createContext, useState } from "react";

const Dashboard: React.FC = () => {
  const colDef = [
    { field: "Title" },
    { field: "startDate" },
    { field: "deadline" },
    { field: "leader" },
    { field: "completion" },
    { field: "priority" },
  ];
  const rowData = [
    {
      Title: "Project A",
      startDate: "01-01-2012",
      deadline: "3 months",
      leader: "John Doe",
      completion: 30,
      priority: "low",
    },
    {
      Title: "Project B",
      startDate: "01-01-2012",
      deadline: "2 months",
      leader: "Jane Smith",
      completion: 50,
      priority: "medium",
    },
    {
      Title: "Project C",
      startDate: "01-01-2012",
      deadline: "6 months",
      leader: "Michael Johnson",
      completion: 70,
      priority: "high",
    },
    {
      Title: "Project D",
      startDate: "01-01-2012",
      deadline: "4 months",
      leader: "Emily Davis",
      completion: 20,
      priority: "low",
    },
    {
      Title: "Project E",
      startDate: "01-01-2012",
      deadline: "1 month",
      leader: "David Wilson",
      completion: 90,
      priority: "high",
    },
    {
      Title: "Project F",
      startDate: "01-01-2012",
      deadline: "5 months",
      leader: "Sarah Brown",
      completion: 40,
      priority: "medium",
    },
    {
      Title: "Project G",
      startDate: "01-01-2012",
      deadline: "3 months",
      leader: "Daniel Martinez",
      completion: 60,
      priority: "medium",
    },
    {
      Title: "Project H",
      startDate: "01-01-2012",
      deadline: "2 months",
      leader: "Olivia Garcia",
      completion: 80,
      priority: "high",
    },
    {
      Title: "Project I",
      startDate: "01-01-2012",
      deadline: "7 months",
      leader: "James Rodriguez",
      completion: 25,
      priority: "low",
    },
    {
      Title: "Project J",
      startDate: "01-01-2012",
      deadline: "4 months",
      leader: "Emma Hernandez",
      completion: 75,
      priority: "high",
    },
    {
      Title: "Project C",
      startDate: "01-01-2012",
      deadline: "6 months",
      leader: "Michael Johnson",
      completion: 70,
      priority: "high",
    },
    {
      Title: "Project D",
      startDate: "01-01-2012",
      deadline: "4 months",
      leader: "Emily Davis",
      completion: 20,
      priority: "low",
    },
    {
      Title: "Project E",
      startDate: "01-01-2012",
      deadline: "1 month",
      leader: "David Wilson",
      completion: 90,
      priority: "high",
    },
    {
      Title: "Project F",
      startDate: "01-01-2012",
      deadline: "5 months",
      leader: "Sarah Brown",
      completion: 40,
      priority: "medium",
    },
  ];
  
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CardDataStats title="Total Projects" total="88" rate="0.43%" levelUp>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 fill-current dark:fill-white"
            viewBox="0 0 512 512"
          >
            <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
          </svg>
        </CardDataStats>
        <CardDataStats title="Completed Task" total="182" rate="4.35%" levelUp>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-7 w-7 fill-current dark:fill-white"
          >
            <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </CardDataStats>
        <CardDataStats title="Progress Task" total="2.450" rate="2.59%" levelUp>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 fill-current dark:fill-white"
            viewBox="0 0 640 512"
          >
            <path d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
          </svg>
        </CardDataStats>
      </div>
      <div className="mt-4 md:mt-6 2xl:mt-7.5">
        <ChartOne />
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartTwo />
        <ChartThree />
        {/* <MapOne /> */}
        <div className="col-span-12">
		  <h1 className="text-black text-2xl font-semibold py-4 dark:text-white">All Projects</h1>
          <TableAgGrid colDefs={colDef} rowData={rowData} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
