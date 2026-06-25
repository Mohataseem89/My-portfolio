import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectCardStyles.module.css';

function ProjectCard({ src, link, liveLink, h3, p, tech }) {
  const techList = tech ? tech.split(' · ') : [];

  return (
    <div className={styles.project}>
      <div className={styles.projectHeader}>
        <h3 className={styles.projectTitle}>{h3}</h3>
        <div className={styles.projectLinks}>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
              GitHub <span aria-hidden="true">↗</span>
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Live <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
      <p className={styles.projectDesc}>{p}</p>
      {techList.length > 0 && (
        <div className={styles.techList}>
          {techList.map((t, i) => (
            <span key={i} className={styles.tag}>{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string,
  link: PropTypes.string,
  liveLink: PropTypes.string,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  tech: PropTypes.string,
};

export default ProjectCard;