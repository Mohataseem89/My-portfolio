import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillListStyles.module.css';

function SkillList({ src, skill, className, level = 90 }) {
  return (
    <div className={`${styles.skillItem} ${className || ''}`}>
      <div className={styles.skillIcon}>
        <img src={src} alt={skill} role="img" aria-label={`${skill} icon`} />
      </div>
      <div className={styles.skillContent}>
        <p className={styles.skillName}>{skill}</p>
        <div className={styles.skillProgress}>
          <div 
            className={styles.progressBar}
            style={{ '--skill-level': `${level}%` }}
          ></div>
          <span className={styles.skillLevel}>{level}%</span>
        </div>
      </div>
    </div>
  );
}

SkillList.propTypes = {
  src: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  className: PropTypes.string,
  level: PropTypes.number,
};

export default SkillList;
