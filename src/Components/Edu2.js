import React from "react";
import "./Edu2.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Skill from "./Skill";
import Node from './skills logo/Node.png'
import Mongo from './skills logo/Mongo.png'
import Firebase from './skills logo/Firebase.png'
import react from './skills logo/React.png'
import Javascript from './skills logo/Javascript.png'
import Sql from './skills logo/Sql.png'
import azure from './skills logo/azure.png'
import vscode from './skills logo/vscode.png'
import cpp from './skills logo/cpp.png'

export default function Edu2() {
  return (
    <div className="edu2">
      <h3>Education & Skills</h3>
      <div id="line3"></div>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Education</Tab>
          <Tab>Skills</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="edu">
              <div id="ug">
                <h4>Under Graduate</h4>
                <span>B.Tech in Mechanical Engineering,</span>
                <br />
                <span>Vellore Institute of Technology, Vellore</span>
                <br/>
                <span>7.8 CGPA</span>
                
              </div>
            </div>

            <div id="ug">
                <h4>High School</h4>
                <span>Stream: Computer Science</span>
                <br />
                <span>Don Bosco Academy, Patna</span>
                <br />
                <span>82%</span>
              </div>
          </TabPanel>
          <TabPanel>
            <div id='grid'>
              <Skill url={react}/>
              <Skill url={Javascript}/>
              <Skill url={Node}/>
              <Skill url={Mongo} />
              <Skill url={Sql}/>
              <Skill url={Firebase}/>
              <Skill url={azure}/>
              <Skill url={cpp}/>
              <Skill url={vscode}/>     
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
