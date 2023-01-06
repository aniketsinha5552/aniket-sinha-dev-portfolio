import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  Sticky,
  Move,
  StickyIn,
  FadeIn,
  ZoomIn,
  FadeOut

} from "react-scroll-motion";
import "./App.css";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import Projects from "./Components/Projects";
import { motion,useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import * as React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import About from "./Components/About/About";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 3000)
  }, []) 

  return (
    <ChakraProvider>
      <motion.div className="App" >
      
      <Header/>
      <Sidebar/>
      
      <ScrollContainer>
        <div id="home">
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -700))}>
              <section>
                <Home />
              </section>
            </Animator>
          </ScrollPage>
        </div>

        <div id="aboutSection">
          <ScrollPage>
            <Animator animation={batch(Move(),MoveOut(0, 10),Fade())}>
              <section>
                <About/>
              </section>
            </Animator>
          </ScrollPage>
        </div>

        <div id="projects">
          <ScrollPage>
            <Animator animation={batch(Move(),MoveOut(0, 10),Fade())}>
              <section>
                <Projects />
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
    </motion.div> 
    </ChakraProvider>
    
  );
}

export default App;
