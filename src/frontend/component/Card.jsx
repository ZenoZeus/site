import React from 'react'
import { motion } from "motion/react"

const Card = ({ele,itm}) => {
  return (
    <>
    <motion.div className='shrink-0  block w-[15vw] h-[45vh] bg-white rounded-xl justify-center flex items-center flex-col relative overflow-hidden'
    animate={{
        x:["-200vw","100vw","-100vw"],
        rotate:[-45,0,45,0,-45]
    }}
    whileHover={{scale:3}}
    transition={{
        duration:"50",
        repeat:Infinity,
    }}
    drag >
    <div className='w-[20%]  absolute top-2 left-2'><img src={itm} alt="" /></div>
    <div className='text-poppins font-bold text-2xl m-2 p-2'>{ele}</div>
    <div className='w-[20%] absolute bottom-2 right-2'><img src={itm} alt="" /></div>
    </motion.div>
    </>
  )
}

export default Card