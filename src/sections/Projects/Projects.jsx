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
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.heading}>
        <p>Selected Work</p>
        <h2>Projects</h2>
      </div>

      <div className={styles.filters}>
        {categories.map(c => (
          <button
            key={c.key}
            className={`${styles.filter} ${filter === c.key ? styles.active : ''}`}
            onClick={() => setFilter(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {filtered.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      
        href="https://github.com/Mohataseem89"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.viewMore}
      >
        More on GitHub ↗
      </a>
    </section>
  );
}
