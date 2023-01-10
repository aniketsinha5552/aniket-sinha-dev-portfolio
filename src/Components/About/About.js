import React from "react";
import "./About.css";
import me from "../Images/profilePic.jpg";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
     style={{ display: "grid", placeItems: "center" }}>
        <motion.h1 
        initial={{ opacity: 0,x:0}}
        whileInView={{ opacity: 1,x:80 }}
        transition={{duration:2}}
        id="about-head"  >About Me</motion.h1>
      <div id="about">
        <div id="about-left">
          <img src={me} alt="profile-pic" />
        </div>
        <div id="about-right">
          <p>
            {" "}
            Hello! My name is Aniket Sinha. I am a passionate Full Stack Web
            Developer from India. I enjoy creating things on the internet.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <UnorderedList style={{color:"rgb(19,155,128)",marginLeft:"30px"}}>
            <ListItem>ReactJs</ListItem>
            <ListItem>NodeJs</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>MongoDB</ListItem>
          </UnorderedList>
          <UnorderedList style={{color:"rgb(19,155,128)",marginRight:"60px"}}>
            <ListItem>SQL</ListItem>
            <ListItem>C++</ListItem>
            <ListItem>Azure</ListItem>
            <ListItem>Github</ListItem>
          </UnorderedList>
          </div>
        </div>
      </div>
    </div>
  );
}
