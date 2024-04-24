"use client";
import BodyHeader from "@/components/Header/BodyHeader";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Modal } from "@/components/Modal";
import { TableAgGrid } from "@/components/Tables/TableAgGrid";
import { LucidePlusCircle } from "lucide-react";
import { useState } from "react";

const Timeline = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const colDef = [
    { field: "Title" },
    { field: "startDate" },
    { field: "deadline" },
    { field: "leader" },
    { field: "completion" },
    { field: "stage" },
  ];
  const rowData = [
    {
      Title: "Project A",
      startDate: "01-01-2012",
      deadline: "3 months",
      leader: "John Doe",
      completion: 30,
      stage: "low",
    },
    {
      Title: "Project B",
      startDate: "01-01-2012",
      deadline: "2 months",
      leader: "Jane Smith",
      completion: 50,
      stage: "medium",
    },
    {
      Title: "Project C",
      startDate: "01-01-2012",
      deadline: "6 months",
      leader: "Michael Johnson",
      completion: 70,
      stage: "high",
    },
    {
      Title: "Project D",
      startDate: "01-01-2012",
      deadline: "4 months",
      leader: "Emily Davis",
      completion: 20,
      stage: "low",
    },
    {
      Title: "Project E",
      startDate: "01-01-2012",
      deadline: "1 month",
      leader: "David Wilson",
      completion: 90,
      stage: "high",
    },
    {
      Title: "Project F",
      startDate: "01-01-2012",
      deadline: "5 months",
      leader: "Sarah Brown",
      completion: 40,
      stage: "medium",
    },
    {
      Title: "Project G",
      startDate: "01-01-2012",
      deadline: "3 months",
      leader: "Daniel Martinez",
      completion: 60,
      stage: "medium",
    },
    {
      Title: "Project H",
      startDate: "01-01-2012",
      deadline: "2 months",
      leader: "Olivia Garcia",
      completion: 80,
      stage: "high",
    },
    {
      Title: "Project I",
      startDate: "01-01-2012",
      deadline: "7 months",
      leader: "James Rodriguez",
      completion: 25,
      stage: "low",
    },
    {
      Title: "Project J",
      startDate: "01-01-2012",
      deadline: "4 months",
      leader: "Emma Hernandez",
      completion: 75,
      stage: "high",
    },
    {
      Title: "Project C",
      startDate: "01-01-2012",
      deadline: "6 months",
      leader: "Michael Johnson",
      completion: 70,
      stage: "high",
    },
    {
      Title: "Project D",
      startDate: "01-01-2012",
      deadline: "4 months",
      leader: "Emily Davis",
      completion: 20,
      stage: "low",
    },
    {
      Title: "Project E",
      startDate: "01-01-2012",
      deadline: "1 month",
      leader: "David Wilson",
      completion: 90,
      stage: "high",
    },
    {
      Title: "Project F",
      startDate: "01-01-2012",
      deadline: "5 months",
      leader: "Sarah Brown",
      completion: 40,
      stage: "medium",
    },
  ];

  const SendSheetForm = {
    Email: {
      type: "email",
    },
  };

  return (
    <div>
      {openModal && (
        <Modal
          isOpen={openModal}
          form={SendSheetForm}
          onClose={closeModal}
          create="Sheets Sent"
        />
      )}
      <div className={`${openModal && "pointer-events-none blur"}`}>
        <DefaultLayout>
          <BodyHeader title="Projects Timeline">
            <div className="flex gap-6">
              <button
                className="flex items-center gap-2 rounded-md bg-primary p-2 text-black  dark:text-gray"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <LucidePlusCircle />
                Send Sheets
              </button>
            </div>
          </BodyHeader>
          <div className="mt-10">
            <TableAgGrid colDefs={colDef} rowData={rowData} />
          </div>
        </DefaultLayout>
      </div>
    </div>
  );
};

export default Timeline;
