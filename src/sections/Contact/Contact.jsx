import styles from './ContactStyles.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.heading}>
        <p>Get In Touch</p>
        <h2>Contact</h2>
      </div>
      <p className={styles.sub}>
        I'm actively looking for internships, full-time roles, and open source collaborations.
        Feel free to reach out — I reply within a day.
      </p>
      <div className={styles.links}>
        <a href="mailto:mohataseem89@gmail.com" className={styles.link}>
          mohataseem89@gmail.com
        </a>
        <a href="https://github.com/Mohataseem89" target="_blank" rel="noopener noreferrer" className={styles.link}>
          github.com/Mohataseem89
        </a>
        <a href="https://www.linkedin.com/in/mohataseem-khan/" target="_blank" rel="noopener noreferrer" className={styles.link}>
          linkedin.com/in/mohataseem-khan
        </a>
      </div>
    </section>
  );
}