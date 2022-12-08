import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Contact.css'


export default function Contact() {
  return (
    <div className='contact'>
      <h2>Get In Touch!</h2>
      <div id='icons'>
      <a href='https://github.com/aniketsinha5552' target='_blank'><GitHubIcon/></a>
      <a href='https://www.linkedin.com/in/aniket-sinha-a2ab29241/' target='_blank'><LinkedInIcon/></a>
      <a href="mailto:aniketsinha5552@gmail.com" target='_blank'><EmailIcon/></a>
      <a href='https://www.instagram.com/aniket._sinha/' target='_blank'><InstagramIcon/></a>

      </div>

      <div id='sayHello'>
      <a href="mailto:aniketsinha5552@gmail.com" target='_blank'><button id="helloBtn">Say Hello</button></a>
        
      </div>
      
    </div>
  )
}
