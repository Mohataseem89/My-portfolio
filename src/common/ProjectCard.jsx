import PropTypes from 'prop-types';
import styles from './ProjectCardStyles.module.css';

export default function ProjectCard({ project }) {
  const { h3, p, tech, link, liveLink } = project;
  const techList = tech ? tech.split(' · ') : [];

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.title}>{h3}</span>
        <div className={styles.links}>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
              GitHub ↗
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Live ↗
            </a>
          )}
        </div>
      </div>
      <p className={styles.desc}>{p}</p>
      {techList.length > 0 && (
        <div className={styles.tech}>
          {techList.map((t, i) => (
            <span key={i} className={styles.tag}>{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    h3: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
    tech: PropTypes.string,
    link: PropTypes.string,
    liveLink: PropTypes.string,
  }).isRequired,
};
