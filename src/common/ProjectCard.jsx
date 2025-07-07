
import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ src, link, h3, p, tech }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={h3} />
      <h3>{h3}</h3>
      <p>{p}</p>
      {tech && <div className="tech">{tech}</div>}
    </a>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};

export default ProjectCard;
