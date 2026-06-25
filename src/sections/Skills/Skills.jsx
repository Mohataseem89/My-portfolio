import styles from './SkillsStyles.module.css'

export default function Skills({ skills }) {
  const groups = [
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'Data & ML', items: skills.data },
    { title: 'DevOps & Tools', items: skills.devops },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p>What I Work With</p>
        <h2>Skills</h2>
      </div>

      <div className={styles.grid}>
        {groups.map((group) => (
          <article key={group.title} className={styles.card}>
            <h3>{group.title}</h3>
            <div className={styles.tags}>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}