import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillListStyles.module.css';

function SkillList({ skill }) {
  return (
    <span className={styles.tag}>{skill}</span>
  );
}

SkillList.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default SkillList;