import React from 'react';
import PropTypes from 'prop-types';

const Paper = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4>{data.company}</h4>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Paper.propTypes = {
  data: PropTypes.shape({
    company: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Paper;
