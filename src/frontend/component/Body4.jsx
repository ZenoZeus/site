import React from "react";
import BadgeCard from "../component/BadgeCard.jsx";
const Body4 = () => {
  return (
    <>
      <div className="bg-black p-32">
        <div className="pb-6">
          <div className="text-green-500">My Expertise</div>
          <div className="text-white flex text-6xl">
            <u>T</u>echnical<div className="text-green-500">Skills</div>
          </div>
        </div>
        <div className="flex gap-6 flex-wrap">
          <BadgeCard
            title="Programming Language"
            badges={[{ label: "C" }, { label: "Java" }, { label: "Python" }]}
          ></BadgeCard>
            <BadgeCard title="WebDev" badges={[{label:"HTML5"},{label:"CSS"},{label:"JavaScript"},{label:"ES6"},{label:"NodeJs"},{label:"ExpressJs"},{label:"ReactJs"},{label:"MongoDB"},{label:"FramerMotion"},{label:"MantineUi"},{label:"ReactBits"},{label:"ReactPrime"},{label:"ZOD"},{label:"Axios"},{label:"Autherization & Authentication"},{label:"JWT-Auth"},{label:"Bcrypt"},{label:"CORS"},{label:"Versel"},{label:"EJS"},{label:"Server-side-rendering"},{label:"REST-APIS"},{label:"Socket.Io"},{label:"Prop Drilling"}]}></BadgeCard>
          <BadgeCard title="Databases" badges={[{label:"MongoDb"},{label:"MySql"},{label:"MongooseORM"}]}></BadgeCard>
          <BadgeCard title="Python Related Skills" badges={[{label:"Python"},{label:"Langchain"},{label:"RAG Modals"},{label:"Matlab"},{label:"Panda"},{label:"NumPy"}]}></BadgeCard>
          <BadgeCard title="Course Work" badges={[{label:"Database Management Systems"},{label:"Computer Network"},{label:"Data Structures And Algorithm-JAVA"}]}></BadgeCard>
          <BadgeCard title="Tools" badges={[{label:"VSCODE"},{label:"Nano"},{label:"Vim"},{label:"Canva"},{label:"MS-PowerPoint"},{label:"MS-Word"},{label:"Github"},{label:"Versel"},{label:"ChatGPT and other Ai tools"}]}></BadgeCard>
        </div>
      </div>
    </>
  );
};

export default Body4;
