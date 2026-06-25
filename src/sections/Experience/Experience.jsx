import styles from './ExperienceStyles.module.css'

export default function Experience({ items }) {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p>Background</p>
        <h2>Experience & Education</h2>
      </div>

      <div className={styles.timeline}>
        {items.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.topRow}>
              <h3>{item.title}</h3>
              <span>{item.period}</span>
            </div>
            <p className={styles.meta}>{item.meta}</p>
            <p className={styles.desc}>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}