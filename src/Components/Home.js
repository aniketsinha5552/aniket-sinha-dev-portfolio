import React from "react";
import "./Home.css";
import profilePic from './Images/profilePic.jpg'

export default function Home() {
  return (
    <div className="outer">
       <img id='profilePic' src={profilePic}></img>
       <p id="hi">Hi! I am</p>
       <h1 id='name'>Aniket Sinha.</h1>
       <h2 id='title'>Developer, Engineer.</h2>
       <h3 id='age'>21</h3>
       
    </div>
  );
}
