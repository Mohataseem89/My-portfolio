import React from 'react';
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
      <div className={styles.footerContent}>
        <div className={styles.socialSection}>
          <h3 className={styles.connectTitle}>Let's Connect</h3>
          <div className={styles.icons}>
            <a 
              href="mailto:mohataseem89@gmail.com" 
              aria-label="Email" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <img src={mailIcon} alt="Email" />
              <span className={styles.iconLabel}>Email</span>
            </a>
            <a 
              href="https://github.com/Mohataseem89" 
              aria-label="GitHub" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <img src={githubIcon} alt="GitHub" />
              <span className={styles.iconLabel}>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/mohataseem-khan/" 
              aria-label="LinkedIn" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <img src={linkedinIcon} alt="LinkedIn" />
              <span className={styles.iconLabel}>LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.copyrightSection}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} <strong>Mohataseem Khan</strong>. All rights reserved.
          </p>
          <p className={styles.tagline}>
            Crafted with 💜 and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
