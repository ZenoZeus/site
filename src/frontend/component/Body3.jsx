import React, { useState } from 'react'
import Card from './Card'

const Body3 = () => {
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
const item=["h.png","s.png","d.png","c.png"]
  return (
    <>
    <div className='oveflow-hidden'>
            <div className='absolute h-[80vh] bg-black   overflow-hidden flex space-x-4 justify-center items-center z-4'>
        {
                data.map((ele,key)=>{
                    const itm=item[key%4]
                    return (<Card ele={ele} itm={itm}/>)
                })
            }
    </div>
    </div>
    </>
  )
}

export default Body3