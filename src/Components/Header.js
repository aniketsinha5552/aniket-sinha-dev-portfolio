import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'
import as from './Images/as-logo.png'

export default function Header() {
  return (
    <div className='header'>
         <h2><img id='logo' src={as}></img></h2>
         <a href="https://drive.google.com/file/d/1Wu_rVfwW7MMW5IKKnUwrjV2gZ3dOLf8J/view?usp=sharing" target='_blank'><button id='resume'>Resume</button></a> 
         <div id="navbar">
          
          <span>
          <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
          </span>
          <span>
            <Link to="projects" spy={true} smooth={true}>
              Projects {" "}
            </Link>
          </span>
          <span>
            <Link to="edu" spy={true} smooth={true}>
              Education{" "}
            </Link>
          </span>
          
          <span>
            <Link to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </span>
        </div>
       
    </div>
  )
}
