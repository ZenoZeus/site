import React, { useState } from 'react'
import Tile from './Tile'
import { motion } from 'motion/react';


const Body2 = () => {
    const skills = [
  "C Programming",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Projects",
  "MySQL",
  "Git / Version Control",
  "Operating System",
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "DBMS",
  "ExpressJs",
  "Mongoose",
  "MongoDB",
  "NodeJs"
];

    const [data, setdata] = useState([...skills])
    
  return (
    <>
    <div className='h-[80vh] w-[100vw] bg-black flex pb-8 '>
        <motion.div className=' w-[50vw] justify-center items-center flex text-sans text-8xl text-white relative z-4 ' 
        >Skills</motion.div>
        <div className='bg-green-500 w-[100vw] relative z-2 pl-[10vw] overflow-hidden flex rounded-full justify-center items-center space-x-15 '>
            {
                data.map((ele,key)=>{
                    return (<Tile className="absolute" e={ele}/>)
                })
            }
        </div>
    </div>
    </>
  )
}

export default Body2