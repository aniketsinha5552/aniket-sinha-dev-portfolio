import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Contact.css'
import { motion } from 'framer-motion';


export default function Contact() {
  return (
    <div className='contact'>
      <motion.h2
       initial={{ opacity: 0,}}
       whileInView={{ opacity: 1, boxShadow:"10px 10px 0 rgb(0,0,0,0.5)"}}
       transition={{duration:2}}
      >Get In Touch!</motion.h2>
      <div id='icons'>
      <motion.a whileHover={{ boxShadow:"5px 5px 0 rgb(0,0,0,0.5)", scale:1.05}} transition={{duration:1}}  href='https://github.com/aniketsinha5552' target='_blank'><GitHubIcon/></motion.a>
      <motion.a whileHover={{ boxShadow:"5px 5px 0 rgb(0,0,0,0.5)", scale:1.05}} transition={{duration:1}}  href='https://www.linkedin.com/in/aniket-sinha-a2ab29241/' target='_blank'><LinkedInIcon/></motion.a>
      <motion.a whileHover={{ boxShadow:"5px 5px 0 rgb(0,0,0,0.5)", scale:1.05}} transition={{duration:1}}  href="mailto:aniketsinha5552@gmail.com" target='_blank'><EmailIcon/></motion.a>
      <motion.a whileHover={{ boxShadow:"5px 5px 0 rgb(0,0,0,0.5)", scale:1.05}} transition={{duration:1}}  href='https://www.instagram.com/aniket._sinha/' target='_blank'><InstagramIcon/></motion.a>

      </div>

      <div id='sayHello'>
      <a href="mailto:aniketsinha5552@gmail.com" target='_blank'><button id="helloBtn">Say Hello</button></a>
        
      </div>
      
    </div>
  )
}
