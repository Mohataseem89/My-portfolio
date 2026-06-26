import './App.css';
import Navbar from './sections/Navbar/Navbar';
import Photosec from './sections/photosec/photosec';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import OpenSource from './sections/OpenSource/OpenSource';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import { projects } from './data/projects.js';

const skills = {
  frontend: ['React', 'Redux', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  backend:  ['Node.js', 'Express.js', 'Python', 'Flask', 'REST APIs', 'JWT', 'Firebase'],
  data:     ['TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib'],
  devops:   ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Terraform', 'Jenkins', 'Vercel', 'Netlify', 'Git', 'Linux'],
};

function App() {
  return (
    <>
      <Navbar />
      <Photosec />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Experience />
      <OpenSource />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
