import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({
  showRecommendedPath,
  disableAutoScroll,
  toggleRecommendedPath,
  toggleDisableAutoScroll
}) => {
  return (
    <ul id="filter">
      <li>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="recommended"
              checked={showRecommendedPath}
              onChange={toggleRecommendedPath}
            />
            <span>Recommended</span>
          </label>
        </div>
      </li>
      <li>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="disableAutoScroll"
              checked={disableAutoScroll}
              onChange={toggleDisableAutoScroll}
            />
            <span>Disable auto-scroll</span>
          </label>
        </div>
      </li>
    </ul>
  )
};

Filter.propTypes = {
  showRecommendedPath: PropTypes.bool.isRequired,
  disableAutoScroll: PropTypes.bool.isRequired,
  toggleRecommendedPath: PropTypes.func.isRequired,
  toggleDisableAutoScroll: PropTypes.func.isRequired
};

export default Filter;
