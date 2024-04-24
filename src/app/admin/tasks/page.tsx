"use client";

import {
  CardWrapper,
  GridWrapper,
  VerticalWrapper,
} from "@/components/Card/Wrapper";
import { Card1, Card2, Card3, Card4 } from "@/components/Card/TaskCard";
import BodyHeader from "@/components/Header/BodyHeader";
import { Modal } from "@/components/Modal";
import { useState } from "react";
import { LucidePlusCircle } from "lucide-react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
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
          create="Create New Task"
        />
      )}
      <div className={`${openModal && "pointer-events-none blur"}`}>
        <DefaultLayout>
          <BodyHeader title="Task Management">
            <div className="flex gap-6">
              <button
                className="flex items-center gap-2 rounded-md bg-primary p-2 text-black dark:text-gray"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <LucidePlusCircle />
                Create Task
              </button>
            </div>
          </BodyHeader>
          <CardWrapper>
            <Card1 />
            <Card2 />
            <Card3 />
          </CardWrapper>
          <GridWrapper>
            <VerticalWrapper>
              <h2 className="text-lg font-semibold text-black dark:text-white">In Progress</h2>
              <Card4 task="UI/UX Design" priority={"Medium"} />
              <Card4 task="Pentest" priority={"High"} />
              <Card4 task="FrontEnd" priority={"Low"} />
              <Card4 task="UI/UX Design" priority={"Medium"} />
              <Card4 task="Pentest" priority={"High"} />
            </VerticalWrapper>
            <VerticalWrapper>
              <h2 className="text-lg font-semibold text-black dark:text-white">Needs Review</h2>
              <Card4 task="Backend" priority={"Medium"} />
              <Card4 task="UI/UX Design" priority={"Medium"} />
              <Card4 task="UI/UX Design" priority={"Medium"} />
            </VerticalWrapper>
            <VerticalWrapper>
              <h2 className="text-lg font-semibold text-black dark:text-white">Completed</h2>
              <Card4 task="UI/UX Design" priority={"Medium"} />
              <Card4 task="Pentest" priority={"High"} />
              <Card4 task="FrontEnd" priority={"Low"} />
              <Card4 task="UI/UX Design" priority={"Medium"} />
            </VerticalWrapper>
          </GridWrapper>
        </DefaultLayout>
      </div>
    </div>
  );
};

export default Tasks;
