import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© {new Date().getFullYear()} Mohataseem Khan</span>
      <div className={styles.links}>
        <a href="https://github.com/Mohataseem89" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub ↗</a>
        <a href="https://www.linkedin.com/in/mohataseem-khan/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn ↗</a>
        <a href="mailto:mohataseem89@gmail.com" className={styles.link}>Email ↗</a>
      </div>
    </footer>
  );
}

export default Footer;
