import React from "react";
import "./Projects.css";
import valo from "./Images/valo.jpg";
import sort from "./Images/sorting.jpg";
import linkedIn from "./Images/linkedIn.jpg";
import mdb from "./Images/mdb.png";
import tt from "./Images/tt.png";
import progressBar from "./Images/progressBar.png";
import superhero from "./Images/superhero.png";
import zen from "./Images/zen.jpg"
import billSplitter from "./Images/billSplitter.png";
import login from "./Images/login.png";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { myProjects } from "../myProjects";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion } from "framer-motion";
import linkedInGif from './Images/project gifs/linkedIn-demo.gif'
import mdbGif from './Images/project gifs/mdb-demo.gif'
import zenGif from './Images/project gifs/zen-demo.gif'

export default function Projects() {
  console.log(myProjects);
  return (
    <div  style={{ display: "grid", placeItems: "center",placeContent:"center" }}>
    <div className="projects">
      <motion.h2
      initial={{ opacity: 0,scale:0.8}}
      whileInView={{ opacity: 1,scale:1 }}
      transition={{duration:1}}
      >Some Things I've Built.</motion.h2>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>LinkedIn Clone</Tab>
          <Tab>The Traveller</Tab>
          <Tab>MDb</Tab>
          <Tab>Zen☯️</Tab>
         <p id="other"> <Tab>Other Projects</Tab></p>
        </TabList>
        <TabPanels>
          <TabPanel>
            <h1 id="projectTitle">{myProjects[0].name}</h1>
            <div id="projectDesc">
              <img src={linkedInGif} alt=""></img>
              <div id="projectDescLeft">
                <span id="descHead">
                  About <p style={{ fontWeight: 300, }}>{myProjects[0].about}</p>
                </span>
                <br />
                <span id="descHead">
                  Tech
                  <p style={{ fontWeight: 300 }}>
                    {" "}
                    {myProjects[0].tech.map((item) => {
                      return <span>{item}. </span>;
                    })}
                  </p>
                  <br />
                </span>
                <span id="descHead">
                  Links
                  <p>
                    <a href={myProjects[0].github} target="_blank" rel="noreferrer"><GitHubIcon /></a>
                    <a href={myProjects[0].website}  target="_blank" rel="noreferrer"><LaunchIcon /></a>
                  </p>
                </span>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h1 id="projectTitle">{myProjects[1].name}</h1>
            <div id="projectDesc">
              <img src={tt} alt=""></img>
              <div id="projectDescLeft">
                <span id="descHead">
                  About <p style={{ fontWeight: 300 }}>{myProjects[1].about}</p>
                </span>
                <br />
                <span id="descHead">
                  Tech
                  <p style={{ fontWeight: 300 }}>
                    {" "}
                    {myProjects[1].tech.map((item) => {
                      return <span>{item}. </span>;
                    })}
                  </p>
                  <br />
                </span>
                <span id="descHead">
                  Links
                  <p>
                  <a href={myProjects[1].github} target="_blank" rel="noreferrer"><GitHubIcon /></a>
                    <a href={myProjects[1].website}  target="_blank" rel="noreferrer"><LaunchIcon /></a>
                  </p>
                </span>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h1 id="projectTitle">{myProjects[2].name}</h1>
            <div id="projectDesc">
              <img src={mdbGif} alt=""></img>
              <div id="projectDescLeft">
                <span id="descHead">
                  About <p style={{ fontWeight: 300 }}>{myProjects[2].about}</p>
                </span>
                <br />
                <span id="descHead">
                  Tech
                  <p style={{ fontWeight: 300 }}>
                    {" "}
                    {myProjects[2].tech.map((item) => {
                      return <span>{item}. </span>;
                    })}
                  </p>
                  <br />
                </span>
                <span id="descHead">
                  Links
                  <p>
                  <a href={myProjects[2].github} target="_blank" rel="noreferrer"><GitHubIcon /></a>
                    <a href={myProjects[2].website}  target="_blank" rel="noreferrer"><LaunchIcon /></a>
                  </p>
                </span>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h1 id="projectTitle">{myProjects[3].name}</h1>
            <div id="projectDesc">
              <img src={zenGif} alt=""></img>
              <div id="projectDescLeft">
                <span id="descHead">
                  About <p style={{ fontWeight: 300 }}>{myProjects[3].about}</p>
                </span>
                <br />
                <span id="descHead">
                  Tech
                  <p style={{ fontWeight: 300 }}>
                    {" "}
                    {myProjects[3].tech.map((item) => {
                      return <span>{item}. </span>;
                    })}
                  </p>
                  <br />
                </span>
                <span id="descHead">
                  Links
                  <p>
                  <a href={myProjects[3].github} target="_blank" rel="noreferrer"><GitHubIcon /></a>
                    <a href={myProjects[3].website}  target="_blank" rel="noreferrer"><LaunchIcon /></a>
                  </p>
                </span>
              </div>
            </div>
          </TabPanel>
          <div id="other">
          <TabPanel >
            <h1 id="projectTitle">Other Projects</h1>
            <div id="other-projects">
             <a href="https://github.com/aniketsinha5552/Valorant-Agents-Info" target="_blank" rel="noreferrer"> <div id="pcard">
                Valorant Agents Info
                <img src={valo} alt=""></img>
                <p id="overlay">JavaScript, HTML5, CSS3</p>
              </div> </a>
              <a href="https://github.com/aniketsinha5552/progress_bars" target="_blank" rel="noreferrer"><div id="pcard">
                Animated Progress Bars
                <img src={progressBar} alt=""></img>
                <p id="overlay">React, Framer Motion library</p>
              </div></a>
              <a href="https://github.com/aniketsinha5552/Login-System-MERN" target="_blank" rel="noreferrer">
              <div id="pcard">
                Login System
                <img src={login} alt=""></img>
                <p id="overlay">MongoDb, Express, ReactJs, NodeJs</p>
              </div></a>
              <a href="https://github.com/aniketsinha5552/BillSplitter" target="_blank" rel="noreferrer">
              <div id="pcard">
                Bill Splitter
                <img src={billSplitter} alt=""></img>
                <p id="overlay">JavaScript, HTML5, CSS3</p>
              </div></a>
              <a href="https://github.com/aniketsinha5552/SuperHero-Stats" target="_blank" rel="noreferrer">
              <div id="pcard">
                SuperHero Stats
                <img src={superhero} alt=""></img>
                <p id="overlay">JavaScript, HTML5, CSS3</p>
              </div></a>
              <a href="https://github.com/aniketsinha5552/Sorting-Visualizer-1" target="_blank" rel="noreferrer">
              <div id="pcard">
                Sorting Visualizer
                <img src={sort} alt=""></img>
                <p id="overlay">React</p>
              </div></a>
            </div>
          </TabPanel>
          </div>
         
        </TabPanels>
      </Tabs>
    </div>
    </div>
  );
}
