import { motion } from 'motion/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
   <div className='flex bg-black text-white space-y-4 space-x-4 p-4 text-xl justify-around align-center]'>
    <motion.div whileHover={{ y:-9 }}><Link to="/">Home</Link></motion.div>
    <motion.div whileHover={{ y:-9 }}><Link to="/About">About</Link></motion.div>
    <motion.div whileHover={{ y:-9 }}><Link to="/Projects">Projects</Link></motion.div>
    <motion.div whileHover={{ y:-9 }}><Link to="/Resume">Resume</Link></motion.div>
   </div>
    </>
  )
}

export default Header