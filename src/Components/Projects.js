import React from 'react'
import './Projects.css'
import valo from './Images/valo.jpg'
import sort from './Images/sorting.jpg'
import linkedIn from './Images/linkedIn.jpg'
import chat from './Images/superChat.jpg'

export default function Projects() {
 
  return (
    <div className='projects'>
      <h2>Some Things I've Built <div id='line'></div></h2>
      <div className='cards'>
        
        <div className='card'>
            <a href='https://valorant-agents-info.netlify.app/' target='_blank'>Valorant Agents Info</a>
            <img src={valo} alt=''></img>
            <button><a href='https://github.com/aniketsinha5552' target='_blank'>GitHub</a></button>
          </div> 
        
          
           <div className='card'>
            <a href='https://aniketsinha5552.github.io/Sorting-Visualizer-1/' target='_blank'>Sorting Visualizer</a>
            <img src={sort} alt=''></img>
            <button><a href='https://github.com/aniketsinha5552' target='_blank'>GitHub</a></button>
          </div>
          <div className='card'>
            <a href='https://aniketsinha5552.github.io/linkedin-clone/' target='_blank'>LinkedIn Clone</a>
            <img src={linkedIn} alt=''></img>
            <button><a href='https://github.com/aniketsinha5552' target='_blank'>GitHub</a></button>
          </div>
          <div className='card'>
          <a href='https://aniketsinha5552.github.io/linkedin-clone/' target='_blank'>SuperChat</a>
            <img src={chat} alt=''></img>
            <button><a href='https://github.com/aniketsinha5552' target='_blank'>GitHub</a></button>
          </div>
      </div>
    </div>
  )
}
