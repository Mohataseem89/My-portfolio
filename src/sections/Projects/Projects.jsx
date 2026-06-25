import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'

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
    </section>
  )
}