import React, { useState, useEffect } from 'react';
import styles from './ProjectsStyles.module.css';
import Moseeqi from '../../assets/music.png';
import flix from '../../assets/netflix.png';
import webpage from '../../assets/htcss.png';
import weather from '../../assets/weather.png';
import food from '../../assets/logo.svg';
import cinema from '../../assets/logofav.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      src: food,
      link: "https://yummigo-food.vercel.app/",
      h3: "Yummigo",
      p: "Food Ordering Website",
      tech: "React, Node.js, MongoDB",
      category: "fullstack",
      featured: true
    },
    {
      id: 2,
      src: cinema,
      link: "https://cine-maxapp.vercel.app/",
      h3: "CineMax",
      p: "Movie Explorer",
      tech: "React, API Integration",
      category: "frontend",
      featured: true
    },
    {
      id: 3,
      src: weather,
      link: "https://mohataseem89.github.io/Weather-Vista/",
      h3: "Weather-Forecast-JS",
      p: "Weather App",
      tech: "JavaScript, Weather API",
      category: "frontend",
      featured: false
    },
    {
      id: 4,
      src: Moseeqi,
      link: "https://github.com/Mohataseem89/Moseeqi-a-music-player",
      h3: "Moseeqi",
      p: "A music player",
      tech: "JavaScript, Web Audio API",
      category: "frontend",
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', icon: '🚀' },
    { key: 'fullstack', label: 'Full Stack', icon: '⚡' },
    { key: 'frontend', label: 'Frontend', icon: '🎨' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
        <div className={styles.bgParticles}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`${styles.bgParticle} ${styles[`bgParticle${i + 1}`]}`} />
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.sectionTitle}>Projects</h1>
          <p className={styles.sectionSubtitle}>
            A collection of my recent work and creative solutions
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterTabs}>
          {categories.map((category) => (
            <button
              key={category.key}
              className={`${styles.filterTab} ${filter === category.key ? styles.active : ''}`}
              onClick={() => setFilter(category.key)}
            >
              <span className={styles.filterIcon}>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Project Stats */}
        <div className={styles.projectStats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{projects.length}</span>
            <span className={styles.statLabel}>Total Projects</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{projects.filter(p => p.featured).length}</span>
            <span className={styles.statLabel}>Featured</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Technologies</span>
          </div>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.projectWrapper} ${project.featured ? styles.featured : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && (
                <div className={styles.featuredBadge}>
                  <span>⭐ Featured</span>
                </div>
              )}
              <ProjectCard 
                src={project.src}
                link={project.link}
                h3={project.h3}
                p={project.p}
                tech={project.tech}
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={styles.viewMoreContainer}>
          <a 
            href="https://github.com/Mohataseem89" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.viewMoreButton}
          >
            <span className={styles.buttonIcon}>🔗</span>
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
