import styles from './ProjectsStyles.module.css';
import Moseeqi from '../../assets/music.png';
import flix from '../../assets/netflix.png';
import webpage from '../../assets/htcss.png';
import weather from '../../assets/weather.png';
import food from '../../assets/logo.svg';
import cinema from '../../assets/logofav.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.sectionTitle}>Projects</h1>
        <p className={styles.sectionSubtitle}>
          A collection of my recent work and creative solutions
        </p>
        <div className={styles.projectsGrid}>
          <ProjectCard 
            src={food} 
            link="https://yummigo-food.vercel.app/" 
            h3="Yummigo" 
            p="Food Ordering Website"
            tech="React • Node.js • MongoDB"
          />
          <ProjectCard 
            src={cinema} 
            link="https://cine-maxapp.vercel.app/" 
            h3="CineMax" 
            p="Movie Explorer"
            tech="React • API Integration"
          />
          <ProjectCard 
            src={weather} 
            link="https://mohataseem89.github.io/Weather-Vista/" 
            h3="Weather-Forecast-JS" 
            p="Weather App"
            tech="JavaScript • Weather API"
          />
          <ProjectCard 
            src={Moseeqi} 
            link="https://github.com/Mohataseem89/Moseeqi-a-music-player" 
            h3="Moseeqi" 
            p="A music player"
            tech="JavaScript • Web Audio API"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;