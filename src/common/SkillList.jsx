// for skill section

import PropTypes from 'prop-types';

function SkillList({ src, skill, className }) {
  return (
    <span className={className}>
      <img src={src} alt={skill} role="img" aria-label={`${skill} icon`} />
      <p>{skill}</p>
    </span>
  );
}

SkillList.propTypes = {
  src: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SkillList.defaultProps = {
  className: '',
};

export default SkillList;
