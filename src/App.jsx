import './App.css';
import Navbar from './sections/Navbar/Navbar';
import Photosec from './sections/photosec/photosec';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import OpenSource from './sections/OpenSource/OpenSource';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Photosec />
      <Projects />
      <Skills />
      <Experience />
      <OpenSource />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
