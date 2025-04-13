import styles from './ProjectsStyles.module.css';
import Moseeqi from '../../assets/music.png';
import flix from '../../assets/netflix.png';
import webpage from '../../assets/htcss.png';
import weather from '../../assets/weather.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Moseeqi}
          link="https://github.com/Mohataseem89/Moseeqi-a-music-player"
          h3="Moseeqi"
          p="A musique player"
        />
        <ProjectCard
          src={flix}
          // src={netflix}
          link="https://github.com/Mohataseem89/Netflix-UI-clone"
          h3="Netflix"
          p="Netflix-UI-Clone"
        />
        <ProjectCard
          src={webpage}
          link="https://github.com/Mohataseem89/a_webpage"
          h3="A_Webpage"
          p="A Landing Page"
        />
        <ProjectCard
          src={weather}
          link="https://mohataseem89.github.io/Weather-Vista/"
          h3="weather-vista"
          p="Weather App"
        />
      </div>
    </section>
  );
}

export default Projects;
