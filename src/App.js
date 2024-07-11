import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <NavBar locomotiveScroll={locomotiveScroll} />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      {/* <Contact /> */} .
      <SocialLinks />
    </div>
  );
}

export default App;
