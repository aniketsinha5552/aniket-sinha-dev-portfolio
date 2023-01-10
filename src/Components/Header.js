import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'
import as from './Images/as-logo.png'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <div className='header'>
         <h2><img id='logo' src={as}></img></h2>
         
         <div id="navbar">
          
          <span>
          <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
          </span>

          <span>
            <Link to="aboutSection" spy={true} smooth={true}>
              About{" "}
            </Link>
          </span>

          <span>
            <Link to="projects" spy={true} smooth={true}>
              Projects {" "}
            </Link>
          </span>
          
          <span>
            <Link to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </span>
        </div>
        <a href="https://drive.google.com/file/d/1Wu_rVfwW7MMW5IKKnUwrjV2gZ3dOLf8J/view?usp=sharing" target='_blank'><motion.button whileHover={{ boxShadow:"5px 5px 0 rgb(0,0,0,0.5)", scale:1.05}} transition={{duration:0.5}}  id='resume'>Resume</motion.button></a> 
       
    </div>
  )
}
