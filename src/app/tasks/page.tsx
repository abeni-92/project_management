"use client";

import CardWrapper from "@/components/Card/CardWrapper";
import { Card1, Card2, Card3, Card4 } from "@/components/Card/TaskCard";
import BodyHeader from "@/components/Header/BodyHeader";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Modal } from "@/components/Modal";
import { useState } from "react";
const Tasks = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };
  const TaskCreateForm = {
    "Project Name": {
      type: "select",
      value: "Select Project Name",
      options: ["UI/UX", "Website Design", "App Development", "Pentest"],
    },
    "Task Category": {
      type: "select",
      value: "UI/UX",
      options: ["UI/UX", "Website Design", "App Development", "Pentest"],
    },
    "Task Images & Documents": {
      type: "file",
    },
    "Start Date": {
      type: "date",
    },
    "End Date": {
      type: "date",
    },
    "Task Assign Person": {
      type: "select",
      value: "abebe",
      options: ["abebe", "kebede", "lema", "mamo", "dagm"],
      multiple: true,
    },
    "Task Priority": {
      type: "select",
      value: "highest",
      options: ["Highest", "Medium", "Low"],
    },
    Description: {
      type: "textarea",
    },
  };

  return (
    <div>
      {openModal && (
        <Modal
          isOpen={openModal}
          form={TaskCreateForm}
          onClose={closeModal}
          create="Task"
        />
      )}
      <div className={`${openModal && "pointer-events-none blur"}`}>
        <DefaultLayout>
          <BodyHeader title="Task Management">
            <div className="flex gap-6">
              <button
                className="flex items-center gap-2 rounded-md bg-primary p-2 text-black  dark:text-white"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current"
                  fill="none"
                  viewBox="0 0 448 512"
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
                Create Task
              </button>
            </div>
          </BodyHeader>
          <CardWrapper>
            <Card1 />
            <Card2 />
            <Card3 />
          </CardWrapper>
          <div className="mt-20">
            <CardWrapper>
              <Card4 task="UI/UX Design" priority={"Medium"} />
              <Card4 task="UI/UX Design" priority={"Medium"} />
              <Card4 task="UI/UX Design" priority={"Medium"} />
              <Card4 task="UI/UX Design" priority={"Medium"} />
              <Card4 task="UI/UX Design" priority={"Medium"} />
              <Card4 task="UI/UX Design" priority={"Medium"} />
            </CardWrapper>
          </div>
        </DefaultLayout>
      </div>
    </div>
  );
};

export default Tasks;
