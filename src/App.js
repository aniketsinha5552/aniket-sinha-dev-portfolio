import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  Sticky,
  Move,

} from "react-scroll-motion";
import "./App.css";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import Project2 from "./Components/Project2";
import Edu2 from "./Components/Edu2";

import * as React from 'react'
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
      <Header/>
      <ScrollContainer>
        <div id="home">
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -600))}>
              <section>
                <Home />
              </section>
            </Animator>
          </ScrollPage>
        </div>

        <div id="projects">
          <ScrollPage>
            <Animator animation={batch(Move(),MoveOut(0, 250),Fade())}>
              <section>
                <Project2 />
              </section>
            </Animator>
          </ScrollPage>
        </div>

        <div id="edu">
          <ScrollPage>
            <Animator animation={batch(Move(),MoveOut(0, -500))}>
              <section id="education">
                <Edu2 />
              </section>
            </Animator>
          </ScrollPage>
        </div>

        
       

        <div id="contact">
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <Contact />
            </Animator>
          </ScrollPage>
        </div> 
      </ScrollContainer>
      <Footer/>
    </div>
    </ChakraProvider>
    
  );
}

export default App;
