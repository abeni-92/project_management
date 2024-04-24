"use client";
import { UserCard } from "@/components/Card/UserCard";
import { CardWrapper } from "@/components/Card/Wrapper";
import BodyHeader from "@/components/Header/BodyHeader";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Modal } from "@/components/Modal";
import { LucidePlusCircle } from "lucide-react";
import { useState } from "react";

const Users = () => {
    const [openModal, setOpenModal] = useState(false);

    const closeModal = () => {
      setOpenModal(false);
    };
  
    const UserCreateForm = {
      "Name": { type: "input", value: "" },
      "Email": { type: "email", value: "" },
      "Phone": { type: "input"},
      "Password": { type: "password"},
      "Department": {
        type: "select",
        value: "Management",
        options: ["Management", "Website Design", "App Development", "Marketing"],
      },
      "Description": {
        type: "textarea",
      },
     
    };
  
  return (
    <div>
      {openModal && (
        <Modal
          isOpen={openModal}
          form={UserCreateForm}
          onClose={closeModal}
          create="Add New User"
        />
      )}
      <div className={`${openModal && "pointer-events-none blur"}`}>
    <DefaultLayout>
         <BodyHeader title="Users">
            <div className="flex gap-4 text-black dark:text-meta-2">
              <button
                className="flex items-center gap-2 rounded-md bg-primary p-2  "
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <LucidePlusCircle />
                Add User
              </button>
              <select name="user" id="user" className="w-20 rounded-md bg-primary">
                <option value="all">All</option>
                <option value="assigned">Task Assigned Members</option>
                <option value="unassigned">UnAssigned Members</option>
              </select>
            </div>
          </BodyHeader>
        <CardWrapper>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        </CardWrapper>
    </DefaultLayout>
    </div></div>
  );
};

export default Users;
