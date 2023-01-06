import React from "react";
import "./Home.css";
import profilePic from './Images/profilePic.jpg'
import { motion } from "framer-motion";
import gif from './Images/bot.gif'

export default function Home() {
  return (
    <motion.div className="outer"  
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}>
       <motion.img 
           transition={{duration:2,}}
           whileHover={{ scale: 1.1,  }}
           initial={{ opacity: 0, x:0 }}
           whileInView={{ opacity: 1,x:50 }}
       id='profilePic' src={gif} ></motion.img>

       <motion.p
       
        transition={{duration:1,}}
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, x:0 }}
        whileInView={{ opacity: 1,x:100 }}
        id="hi">
          Hi!, I am
          </motion.p>


       <motion.h1 
       
       transition={{duration:1.3,}}
       whileHover={{ scale: 1.1 }}
       initial={{ opacity: 0, x:0 }}
        whileInView={{ opacity: 1,x:100 }}
        id='name'>

          Aniket Sinha.
        </motion.h1>


       <motion.h2 
        
        transition={{duration:1.5,}}
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, x:0 }}
        whileInView={{ opacity: 1,x:100 }}
       id='title'>Developer, Engineer.</motion.h2>


       <motion.h3
        
        transition={{duration:1.6,}}
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, x:0 }}
        whileInView={{ opacity: 1,x:100 }}
        id='age'>21
        </motion.h3>
       
    </motion.div>
  );
}
