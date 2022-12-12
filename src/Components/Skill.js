import React from 'react'
import './Skill.css'

export default function Skill(props) {
  return (
    <div className='skills'>
        <img id='SkillLogo' src={props.url} alt=''></img>
    </div>
  )
}
