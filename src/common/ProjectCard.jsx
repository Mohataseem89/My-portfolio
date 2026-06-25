import styles from './ProjectCardStyles.module.css'

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div>
          <p className={styles.period}>{project.period}</p>
          <h3>{project.title}</h3>
          <p className={styles.role}>{project.role}</p>
        </div>
        {project.link ? (
          <a className={styles.link} href={project.link} target="_blank" rel="noreferrer">
            GitHub
          </a>
        ) : null}
      </div>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.stack}>
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <ul className={styles.points}>
        {project.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  )
}