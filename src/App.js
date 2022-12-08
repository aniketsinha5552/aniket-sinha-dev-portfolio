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
  MoveIn,

} from "react-scroll-motion";
import "./App.css";
import Contact from "./Components/Contact";
import Edu from "./Components/Edu";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Footer from './Components/Footer';
import Project2 from "./Components/Project2";

function App() {
  return (
    <div className="App">
      <Header/>
      <ScrollContainer>
        <div id="home">
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -400))}>
              <section>
                <Home />
              </section>
            </Animator>
          </ScrollPage>
        </div>

        <div id="projects">
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <section>
                <Project2 />
              </section>
            </Animator>
          </ScrollPage>
        </div>

        <div id="edu">
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <section id="education">
                <Edu />
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
  );
}

export default App;
