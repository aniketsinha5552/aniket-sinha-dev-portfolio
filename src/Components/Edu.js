import React from 'react'
import './Edu.css'

export default function Edu() {
  return (
    <div className='edu'>
      <h2>Education</h2>
      <div id='ug'>
      <h4>Bachelor's Degree</h4>
      <span>B.Tech in Mechanical Engineering</span><br/>
      <span>Vellore Institute of Technology, Vellore</span><br/>
      <span>CGPA: 7.8</span>
    </div>
    <div id='xiith'>
    <h4>XIIth</h4>
      <span>School:Don Bosco Academy,Patna</span><br/>
      <span>Marks:82%</span><br/>
      <span>Stream:Computer Science</span><br/>
      <span>Board: ISC</span>
    </div>
    <div id='xth'>
      <h4>Xth</h4>
      <span>School:Don Bosco Academy,Patna</span><br/>
      <span>Marks:88%</span><br/>
      <span>Stream:Science</span><br/>
      <span>Board: ICSE</span><br/>
      <div id='line2'></div>
    </div>
    </div>
  )
}
