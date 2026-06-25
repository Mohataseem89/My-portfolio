import styles from './photosecStyles.module.css'

export default function PhotoSec() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.avatarWrap}>
          <div className={styles.avatar}>MK</div>
        </div>

        <p className={styles.kicker}>Full-Stack Developer • AI • Cybersecurity</p>
        <h1>Mohataseem Khan</h1>
        <p className={styles.summary}>
          I build clean, practical web applications with React, Flask, and Node.js, with a strong
          focus on security, performance, and polished UI.
        </p>

        <div className={styles.actions}>
          <a href="https://github.com/Mohataseem89" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:mohataseem89@gmail.com">Contact</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </section>
  )
}