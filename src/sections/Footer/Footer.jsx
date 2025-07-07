import styles from './FooterStyles.module.css';
import githubDark from '../../assets/github-dark.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import mailDark from '../../assets/darkmail.svg';
import mailLight from '../../assets/lightmail.svg';
import { useTheme } from '../../common/ThemeContext';

function Footer() {
  const { theme } = useTheme();

  const mailIcon = theme === 'light' ? mailLight : mailDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.icons}>
        <a href="mailto:mohataseem89@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
          <img src={mailIcon} alt="Email" />
        </a>
        <a href="https://github.com/Mohataseem89" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/mohataseem-khan/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} <strong>Mohataseem Khan</strong>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
