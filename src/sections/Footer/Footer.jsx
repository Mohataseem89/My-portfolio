import styles from './FooterStyles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.label}>Get in touch</p>
          <h2>Let&apos;s build something useful.</h2>
        </div>

        <div className={styles.links}>
          <a href="mailto:mohataseem89@gmail.com">mohataseem89@gmail.com</a>
          <a href="https://github.com/Mohataseem89" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <p className={styles.copy}>© 2026 Mohataseem Khan. Built with React and care.</p>
    </footer>
  )
}