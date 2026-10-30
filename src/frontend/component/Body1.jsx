import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkVeil from "../effects/DarkVeil.jsx";
import TiltedCard from "../effects/TiltedCard.jsx";
import Shuffle from "../effects/Suffle.jsx";
import TextType from "../effects/TextType.jsx";

const Body1 = () => {
  const [n, setname] = useState("/pic.jpg");

  return (
    <>
      <div className="h-[100vh] bg-black flex relative z-10">
        <div className="absolute inset-0 z-0">
          <DarkVeil
            hueShift={105}
            noiseIntensity={0}
            scanlineIntensity={0.5}
            speed={1.1}
            scanlineFrequency={1}
            warpAmount={0}
          />
        </div>
        <div className="m-10 p-20 t-20 flex justify-center align-center grayscale">
          <TiltedCard
            imageSrc="/profile.jpg"
            altText="Profile Image"
            captionText="Profile Image"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            overlayContent={<p className="tilted-card-demo-text"></p>}
          />
        </div>
        <div className="flex flex-col justify-center align-center relative z-10 p-20">
          <div className="text-white text-4xl relative z-10">
            <Shuffle
              text="Hi,Harshit Sharma "
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
            />
          </div>
          <div className="text-white text-4xl relative z-10">
            <TextType
              text={[
                "Full Stack Mern Developer",
                "Frontend Developer-ReactJs,NextJs",
                "Backend Developer-Express,NodeJS",
                "Ai Engineer-Langchain",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              texts={[
                "Welcome to React Bits! Good to see you!",
                "Build some amazing experiences!",
              ]}
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </div>
          <div className="text-white text-2xl">
            View Resume Directly:  <a href="https://drive.google.com/file/d/1ds80koW-MEjrNRU3ioHxTG52lpu3EzNt/view?usp=sharing" >Here</a>
          </div>
          <div className="space-x-10">
            <Link to="https://github.com/ZenoZeus/">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-white text-4xl pt-10"
              />
            </Link>

            <Link to="https://www.linkedin.com/in/harshit-sharma-a1515a275">
              {" "}
              <FontAwesomeIcon
                icon={faSquareLinkedin}
                className="text-white text-4xl pt-10"
              />
              "
            </Link>
            <Link to="./HarshitI.pdf" className="text-white ">
              <FontAwesomeIcon
                icon={faFile}
                className="text-white text-4xl pt-10 hover:text-green-500"
                bounce
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body1;
