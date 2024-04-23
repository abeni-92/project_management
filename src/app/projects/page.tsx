"use client";

import Card from "@/components/Card/Card";
import { CardWrapper } from "@/components/Card/Wrapper";
import BodyHeader from "@/components/Header/BodyHeader";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Modal } from "@/components/Modal";
import { LucidePlusCircle } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const employees = [
    {
      name: "John Doe",
      src: "/images/user/user-01.png",
      alt: "John Doe's photo",
    },
    {
      name: "Jane Smith",
      src: "/images/user/user-02.png",
      alt: "Jane Smith's photo",
    },
    {
      name: "Alice Johnson",
      src: "/images/user/user-03.png",
      alt: "Alice Johnson's photo",
    },
  ];

  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };
  const ProjectCreateForm = {
    "Project Name": { type: "input", value: "" },
    "Project Category": {
      type: "select",
      value: "UI/UX",
      options: ["UI/UX", "Website Design", "App Development", "Pentest"],
    },
	"Project Images & Documents": {
		type: "file"
	},
	"Start Date": {
		type: "date"
	},
	"End Date": {
		type: "date"
	},
	"Task Assign Person": {
		type: "select",
		value: "abebe",
		options: ["abebe", "kebede", "lema", "mamo", "dagm"],
		multiple: true
	},
	"budget": {
		type: "input"
	},
	"priority": {
		type: "select",
		value: "highest",
		options: ["Highest", "Medium", "Low"]
	},
	"Description": {
		type: "textarea"
	}
  };

  return (
    <div>
      {openModal && (
        <Modal
          isOpen={openModal}
          form={ProjectCreateForm}
          onClose={closeModal}
          create="Project"
        />
      )}
      <div className={`${openModal && "pointer-events-none blur"}`}>
        <DefaultLayout>
          <BodyHeader title="Projects">
            <div className="flex gap-6">
              <button
                className="flex items-center gap-2 rounded-md bg-primary p-2 text-black  dark:text-white"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
				<LucidePlusCircle />
                Create Project
              </button>
              <div className="flex cursor-pointer items-center rounded-md border border-primary text-black dark:bg-boxdark-2 dark:text-gray">
                <p className="bg-primary p-2">All</p>
                <p className="p-2 hover:bg-primary">Started</p>
                <p className="p-2 hover:bg-primary">Pending</p>
                <p className="p-2 hover:bg-primary">Completed</p>
              </div>
            </div>
          </BodyHeader>
          <CardWrapper>
            <Card title="UI/UX Design" project="Chat App" employees={employees} percent={"50%"}/>
            <Card title="Frontend" project="Chat App" employees={employees}  percent={"60%"}/>
            <Card title="BackEnd" project="Chat App" employees={employees}  percent={"40%"}/>
            <Card title="Devops" project="Chat App" employees={employees}  percent={"70%"}/>
            <Card title="Pentest" project="Chat App" employees={employees}  percent={"30%"}/>
            <Card title="UI/UX Design" project="Chat App" employees={employees}  percent={"80%"}/> 
            <Card  title="UI/UX Design" project="Chat App" employees={employees}  percent={"40%"}/>           
          </CardWrapper>                      
        </DefaultLayout>
      </div>
    </div>
  );
};

export default Projects;
