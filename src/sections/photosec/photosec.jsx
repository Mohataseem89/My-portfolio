import { useState, useEffect } from 'react';
import styles from './photosecStyles.module.css';
import me from '../../assets/mohataseem.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import mailLight from '../../assets/lightmail.svg';
import mailDark from '../../assets/darkmail.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Photosec() {
  const { theme, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Full Stack Developer',
    'MERN Stack Expert',
    'Frontend Specialist',
    'Backend Engineer',
    'Web Developer'
  ];

  const themeIcon = theme === 'light' ? sun : moon;
  const mailIcon = theme === 'light' ? mailLight : mailDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('phootu');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Dynamic typing effect
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeRole = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setCurrentText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setCurrentText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        roleIndex = (roleIndex + 1) % roles.length;
      }
    };

    const interval = setInterval(typeRole, isDeleting ? 50 : 100);
    return () => clearInterval(interval);
  }, []);

  const handleSocialClick = (platform) => {
    // Add analytics or tracking here if needed
    console.log(`Clicked ${platform}`);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('mohataseem89@gmail.com');
    // You could add a toast notification here
  };

  return (
    <section id="phootu" className={styles.container}>
      {/* Floating particles background */}
      <div className={styles.particles}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`${styles.particle} ${styles[`particle${i + 1}`]}`} />
        ))}
      </div>

      <div className={`${styles.colorModeContainer} ${isVisible ? styles.slideInLeft : ''}`}>
        <div className={styles.profileWrapper}>
          <img
            src={me}
            className={styles.phootu}
            alt="Profile picture of mohataseem khan"
          />
          <div className={styles.profileOverlay}>
            <div className={styles.statusIndicator}>
              <span className={styles.statusDot}></span>
              Available for work
            </div>
          </div>
        </div>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
          tabIndex="0"
          onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
        />
      </div>

      <div className={`${styles.info} ${isVisible ? styles.slideInRight : ''}`}>
        <div className={styles.greetingContainer}>
          <span className={styles.greeting}> Hi, I'm</span>
        </div>
        
        <h1 className={styles.name}>
          <span className={styles.firstName}>Mohataseem</span>
          <span className={styles.lastName}>Khan</span>
        </h1>
        
        <h2 className={styles.typing}>
          <span className={styles.typingText}>{currentText}</span>
          <span className={styles.cursor}>|</span>
        </h2>
        
        <p className={styles.tagline}>
           I turn ideas into pixel-perfect web experiences
        </p>

        <div className={styles.socialContainer}>
          <div className={styles.socialIcons}>
            <a 
              href="mailto:mohataseem89@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              onClick={() => handleSocialClick('email')}
              title="Email Me"
            >
              <img src={mailIcon} alt="mail icon" />
              <span className={styles.tooltip}>Email</span>
            </a>
            
            <a 
              href="https://github.com/Mohataseem89" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              onClick={() => handleSocialClick('github')}
              title="GitHub Profile"
            >
              <img src={githubIcon} alt="Github icon" />
              <span className={styles.tooltip}>GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mohataseem-khan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              onClick={() => handleSocialClick('linkedin')}
              title="LinkedIn Profile"
            >
              <img src={linkedinIcon} alt="Linkedin icon" />
              <span className={styles.tooltip}>LinkedIn</span>
            </a>
          </div>
        </div>

       

        <p className={styles.description}>
           Passionate about crafting modern, scalable web applications using the MERN stack. 
          I specialize in creating seamless user experiences and robust backend architectures 
          for businesses of all sizes.
        </p>

        <div className={styles.buttonContainer}>
          <a href={CV} download className={styles.primaryButton}>
            <button className={`${styles.resumeBtn} hover`}>
              <span>📄 Download Resume</span>
            </button>
          </a>
          
          <a href="#projects" className={styles.secondaryButton}>
            <span>🔍 View Projects</span>
          </a>
        </div>

        <div className={styles.quickActions}>
          <button 
            className={styles.quickAction}
            onClick={copyEmail}
            title="Copy Email"
          >
            📧 Copy Email
          </button>
          
        </div>
      </div>
    </section>
  );
}

export default Photosec;