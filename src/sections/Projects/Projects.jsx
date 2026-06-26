import { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

const categories = [
  { key: 'all',       label: 'All' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'frontend',  label: 'Frontend' },
  { key: 'ml',        label: 'ML / AI' },
];

export default function Projects({ projects }) {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.heading}>
        <p>Selected Work</p>
        <h2>Projects</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <a
        href="https://github.com/Mohataseem89"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.viewAll}
      >
        More on GitHub 
      </a>
    </section>
  )
}
