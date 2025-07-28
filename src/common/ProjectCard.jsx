import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectCardStyles.module.css';

function ProjectCard({ src, link, h3, p, tech }) {
  return (
    <div className={styles.projectCard}>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
        <div className={styles.imageContainer}>
          <img src={src} alt={h3} className={styles.projectImage} />
          <div className={styles.overlay}>
            <span className={styles.viewProject}>View Project</span>
          </div>
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.projectTitle}>{h3}</h3>
          <p className={styles.projectDescription}>{p}</p>
          {tech && (
            <div className={styles.techContainer}>
              {tech.split(', ').map((technology, index) => (
                <span key={index} className={styles.techTag}>
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
    </div>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  tech: PropTypes.string,
};

export default ProjectCard;
