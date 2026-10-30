import React from 'react'
import { motion } from "motion/react"
import { useDragControls } from "motion/react"

const Tile = ({e}) => {
    const fun=()=> {return Math.random()*200;}
 return (
        <motion.div
            // animate={{
            //     scale: [1, 2, 2, 1, 1],
            //     rotate: [0, 0, 180, 180, 0],
            //     borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            // }}
            // transition={{
            //     duration: 2,
            //     ease: "easeInOut",
            //     times: [0, 0.2, 0.5, 0.8, 1],
            //     repeat: 2,
            //     repeatDelay: 1,
            // }}
            initial={{
                x:500,
                y:500
            }}
            animate={{ x:[fun(),fun(),fun(),fun(),fun()],y:[fun(),fun(),fun(),fun(),fun()],
                scale:fun()/100,
             }}
            transition={{
                duration:30,
                repeat:Infinity,
             }}
            whileHover={{ scale: 4 }}
            className='shrink-0 block w-[7vw] h-[7vw] bg-white rounded-full text-black flex text-center items-center justify-center font-bold text-xs ' drag ><div>{e}</div></motion.div>
    )
}

export default Tile