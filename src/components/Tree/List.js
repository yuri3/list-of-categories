import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Card from './Card';

const List = ({
  data, parentId, showRecommendedPath, handleChange
}) => {
  const commonProps = {
    showRecommendedPath,
    handleChange
  };

  const options = data.filter(opt => opt.parentId === parentId);
  const selected = options.find(elm => elm.selected);

  const cardProps = {
    ...commonProps,
    selected,
    options
  };

  const listProps = {
    ...commonProps,
    data,
    parentId: selected ? selected.id : null
  };

  return (
    <div>
      {options.length > 0 && <Card {...cardProps} />}
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionLeave={false}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={0}
      >
        {selected && <List key={listProps.parentId} {...listProps} />}
      </ReactCSSTransitionGroup>
    </div>
  )
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  parentId: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.string,
  ]),
  showRecommendedPath: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default List;
