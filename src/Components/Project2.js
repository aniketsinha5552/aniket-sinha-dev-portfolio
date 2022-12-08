import React, { useState } from 'react'
import './Project2.css'
import valo from './Images/valo.jpg'
import sort from './Images/sorting.jpg'
import linkedIn from './Images/linkedIn.jpg'
import chat from './Images/superChat.jpg'


export default function Project2() {
    const arr = ['Valorant Agents Info', 'LinkedIn Clone','Sorting Visualizer','Super Chat']
    const cards = arr.map((item)=>{
        let desc=''
        let imageUrl = {valo}
        let tech = []
        let websiteLink=''
        let gitLink='https://github.com/aniketsinha5552'
        if(item==='Valorant Agents Info'){
          desc='Know all the info about your favourite Valorant agents here.' 
          imageUrl = `${valo}`
          tech = ['JavaScript','HTML5','CSS5']
          websiteLink= 'https://valorant-agents-info.netlify.app/'
          gitLink='https://github.com/aniketsinha5552/Valorant-Agents-Info'

        }
        if(item==='LinkedIn Clone'){
            desc='A clone website of LinkedIn home page.'
            imageUrl = `${linkedIn}`
            tech = ['React','Redux','Bootsrap']
            websiteLink= 'https://aniketsinha5552.github.io/linkedin-clone/' 
            gitLink='https://github.com/aniketsinha5552/linkedin-clone' 
          }
          if(item==='Sorting Visualizer'){
            desc='Visualizes merge sort algo.'
            imageUrl = `${sort}`
            tech = ['React']  
            websiteLink='https://aniketsinha5552.github.io/Sorting-Visualizer-1/'  
            gitLink='https://github.com/aniketsinha5552/Sorting-Visualizer-1'
          }
          if(item==='Super Chat'){
            desc='A group chatting application.'
            imageUrl = `${chat}`
            tech = ['React','FireBase']
            websiteLink=''  
            gitLink='https://github.com/aniketsinha5552/superchat'
          }


        return(
            <div key={item} id='card'>
                <p id='projectName'>{item}</p>
                <p id='projDesc'>{desc}</p>
                <img id='projectImg' src={imageUrl}></img>
                <div id='techStack'>
                    {tech.map((techno)=><span key={techno}>{techno}. </span>)}
                </div>
                <span><button><a href={gitLink} target='_blank'>GitHub</a></button></span>
                <span><button><a href={websiteLink} target='_blank'>Website</a></button></span>

                
            </div>
        )
    })

    const [count, setCount] = useState(0)

    function handleClick(val){
        setCount(val)
        if(val===0){
            setActiveButton1(true)
            setActiveButton2(false)
            setActiveButton3(false)
            setActiveButton4(false)
        }
        else if(val==1){
            setActiveButton1(false)
            setActiveButton2(true)
            setActiveButton3(false)
            setActiveButton4(false)
        }
        else if(val==2){
            setActiveButton1(false)
            setActiveButton2(false)
            setActiveButton3(true)
            setActiveButton4(false)
        }
        else if(val==3){
            setActiveButton1(false)
            setActiveButton2(false)
            setActiveButton3(false)
            setActiveButton4(true)
        }
       
       
    }

    const [activButton1, setActiveButton1]= useState(true)
    const [activButton2, setActiveButton2]= useState(false)
    const [activButton3, setActiveButton3]= useState(false)
    const [activButton4, setActiveButton4]= useState(false)
  return (
    
    <div id='project2'>
        <h2 id='projHead'>Some Things I've Built</h2>
        <div id='selector'>
            <button onClick={()=>handleClick(0)}  style={{backgroundColor: activButton1? 'transparent':'white'}}>Valorant Agents Info</button>
            <button onClick={()=>handleClick(1)} style={{backgroundColor: activButton2? 'transparent':'white'}}>LinkedIn Clone</button>
            <button onClick={()=>handleClick(2)} style={{backgroundColor: activButton3? 'transparent':'white'}}>Sorting Visualizer</button>
            <button onClick={()=>handleClick(3)} style={{backgroundColor: activButton4? 'transparent':'white'}}>Super Chat</button>
        </div>
        <div>
            {cards[count]}
        </div>
    </div>
  )
}
