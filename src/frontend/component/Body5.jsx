import React from "react";
import ProjectBadgeCard from "./ProjectBadgeCard.jsx";
import { Link } from "react-router-dom";

const Body5 = () => {
  return (
    <>
    <div className="bg-black p-32">

    <div className="pb-6">
        <div className="text-green-500">My Work</div>
    <div className="text-white flex text-6xl"><u>F</u>eatured<div className="text-green-500">Work</div></div>
    </div>
    <div className="flex  space-x-6 justiy-center align-center bg-black">
      <ProjectBadgeCard
        title="GrowMyTherapy"
        description="This project is a responsive therapist website built as part of the frontend task of Ui/Ux recreation in Labmantix internship according to client.Creating a reference homepage layout and redesigning it using a new therapist profile, theme, copy, and images while maintaining the original structure."
        country="Frontend-Project"
        badges={[
            { label: "ReactJs" },
            { label: "TailwindCSS" },
            { label: "Flex" },
            { label: "ReactPrime" },
            { label: "Responsive" }
        ]}
        gitlink="https://github.com/ZenoZeus/GrowMyTherapy"
        livelink="https://grow-my-therapy-beta.vercel.app/"
        ></ProjectBadgeCard>
      <ProjectBadgeCard
        title="Scatch"
        description="Scatch is a modern, full-stack shopping platform designed to simulate real-world e-commerce workflows.
        The project demonstrates secure authentication, RESTful APIs, dynamic server-side rendering, and clean backend architecture using the MERN ecosystem (without React)." country="Full-Stack Platform" badges={[{ label: "EJS (Embedded JavaScript Templates)" },{ label: "SPA" },{ label: "Tailwind CSS" },{ label: "Node.js" },{ label: "Express.js" },{ label: "MongoDB" },{ label: "Mongoose" },{ label: "JWT (JSON Web Tokens" },{ label: "Cookie-based authentication" },{ label: "Zod " },{ label: "Multer " },{ label: "RestApis" },{ label: "Serverside-rendering" },{ label: "ViewEngine" },{ label: "Cors" }]}
        gitlink="https://github.com/ZenoZeus/Scatch"
        ></ProjectBadgeCard>
      <ProjectBadgeCard title="Tomato" description="Frontend Project single page application food ordering app with modern UI/UX and easy usable interface with no re-render." country="Frontend-Project" badges={[{label:"ReactJs"},{label:"Prop-drilling"},{label:"SPA"},{label:"Link"}]} gitlink="https://github.com/ZenoZeus/TomatoReact"></ProjectBadgeCard>
      <div className="flex flex-col items-center justify-center font-bold text-3xl text-white bg-black rounded">
        <Link to="/Projects">All Projects</Link>
      </div>
    </div>
        </div>
    </>
  );
};

export default Body5;
