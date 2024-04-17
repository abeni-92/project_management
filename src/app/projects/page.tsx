import Card from "@/components/Card/Card";
import CardWrapper from "@/components/Card/CardWrapper";
import BodyHeader from "@/components/Header/BodyHeader";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

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

  return (
    <DefaultLayout>
      <BodyHeader title="Projects">
        <div className="flex gap-6">
          <button className="flex items-center gap-2 rounded-md bg-primary p-2 text-black  dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-current"
              fill="none"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
            Create Project
          </button>
          <div className="text-black flex items-center rounded-md border border-primary cursor-pointer dark:bg-boxdark-2 dark:text-gray">
            <p className="bg-primary p-2">All</p>
            <p className="p-2">Started</p>
            <p className="p-2">Pending</p>
            <p className="p-2">Completed</p>
          </div>
        </div>
      </BodyHeader>
      {/* <div className="flex flex-wrap gap-4 mt-4"> */}
      <CardWrapper>
        <Card title="UI/UX Design" project="Chat App" employees={employees} />
        <Card title="Frontend" project="Chat App" employees={employees} />
        <Card title="BackEnd" project="Chat App" employees={employees} />
        <Card title="Devops" project="Chat App" employees={employees} />
        <Card title="Pentest" project="Chat App" employees={employees} />
        <Card title="UI/UX Design" project="Chat App" employees={employees} />
        <Card title="UI/UX Design" project="Chat App" employees={employees} />
      </CardWrapper>
      {/* </div> */}
    </DefaultLayout>
  );
};

export default Projects;
