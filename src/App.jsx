import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AnimatedBackground from "./components/AnimatedBackground";
import BackToTop from "./components/BackToTop";

function App() {
  return (
  
  <>
  <AnimatedBackground />
  <Navbar />
  <Hero />
  <About />
  <Education />
  <Experience />
  <Skills />
  <Services />
  <Projects />
 
 <Achievements />
 <Contact />
 <Footer />
 <BackToTop />
 </>
  );
}

export default App;