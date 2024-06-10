"use client";

import { ProjectCard } from "@/app/_components/Card/ProjectCard";
import { GridWrapper } from "@/app/_components/Card/Wrapper";
import BodyHeader from "@/components/Header/BodyHeader";
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
    budget: {
      type: "input",
    },
    priority: {
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
          form={ProjectCreateForm}
          onClose={closeModal}
          create="Create New Project"
        />
      )}
      <div className={`${openModal && "pointer-events-none blur"}`}>
        {/* <DefaultLayout> */}
        <BodyHeader title="Projects">
          <div className="flex gap-4 text-black dark:text-gray">
            <button
              className="flex items-center gap-2 rounded-md bg-primary p-2"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <LucidePlusCircle />
              <p>Create Project</p>
            </button>
            <select
              name="project"
              id="project"
              className="w-20 rounded-md bg-primary p-2"
            >
              <option value="all">All</option>
              <option value="Started">Started</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </BodyHeader>
        <GridWrapper>
          <ProjectCard
            title="UI/UX Design"
            project="Chat App"
            employees={employees}
            percent={"50%"}
          />
          <ProjectCard
            title="Frontend"
            project="Chat App"
            employees={employees}
            percent={"60%"}
          />
          <ProjectCard
            title="BackEnd"
            project="Chat App"
            employees={employees}
            percent={"40%"}
          />
          <ProjectCard
            title="Devops"
            project="Chat App"
            employees={employees}
            percent={"70%"}
          />
          <ProjectCard
            title="Pentest"
            project="Chat App"
            employees={employees}
            percent={"30%"}
          />
          <ProjectCard
            title="UI/UX Design"
            project="Chat App"
            employees={employees}
            percent={"80%"}
          />
          <ProjectCard
            title="UI/UX Design"
            project="Chat App"
            employees={employees}
            percent={"40%"}
          />
        </GridWrapper>
        {/* </DefaultLayout> */}
      </div>
    </div>
  );
};

export default Projects;
