import React from "react";
import DotGrid from "../effects/DotGrid"
const About = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
      {/* ✅ Background */}
  <div className="absolute z-0 w-[100vw] h-screen bg-black">
  <DotGrid
    dotSize={10}
    gap={15}
    baseColor="#271E37"
    activeColor="#60d680"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
</div>
        <div className="flex justify-center items-center relative z-10 text-white p-26">
          <div>
            <h2 className="text-2xl font-bold">About Me</h2>
            <h2 className="text-4xl font-bold text-green-500 "><u>Who</u> I am</h2>
              <br />
            <div className="font-bold">
              I am a Computer Science undergraduate with a strong focus on
              frontend and full-stack web development, specializing in building
              scalable and responsive applications using modern JavaScript
              frameworks. I have hands-on experience with technologies such as
              React.js, Node.js, Express, and MongoDB, and I am proficient in
              creating dynamic user interfaces using component-based
              architecture and state management. My projects include developing
              full-stack applications like e-commerce platforms, interactive
              dashboards, and API-driven systems, where I implemented RESTful
              APIs, handled asynchronous data fetching, and optimized
              performance for better user experience. 
              <p>I have a solid foundation
              in Data Structures and Algorithms, which enhances my
              problem-solving ability and code efficiency. I am also familiar
              with core computer science concepts including Object-Oriented
              Programming, DBMS, and Operating Systems. Additionally, I have
              experience working with tools like Git for version control and
              deploying applications using modern platforms.</p> <p>
                I am particularly
              interested in integrating real-time data and APIs into
              applications, as demonstrated through projects involving weather
              systems, job automation tools, and dynamic UI components. I am
              continuously learning and exploring advanced frontend techniques,
              animations, and scalable architecture to build impactful and
              user-centric web solutions.
              </p>
            </div>
          </div>
          <div className="flex border m-8 text-green-400">
            <div>
              <div className="border p-16 font-bold text-6xl flex justify-center items-center flex-col"><div>2026</div><div className="text-sm">Graduating</div></div>
              <div className="border p-16 font-bold text-6xl flex justify-center items-center flex-col"><div>3+</div><div className="text-sm">years of learning</div></div>
            </div>
            <div>
              <div className="border p-16 font-bold text-6xl flex justify-center items-center flex-col"><div>5+</div><div className="text-sm">Skills_developed</div></div>
              <div className="border p-16 font-bold text-6xl flex justify-center items-center flex-col"><div>3+</div><div className="text-sm">adsf</div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
