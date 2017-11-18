import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const id = event.target.value;
    const selectedValue = this.props.options.find(elm => elm.id === id);

    this.props.handleChange(selectedValue);
  }

  render() {
    const { selected, options, showRecommendedPath } = this.props;
    let title = 'Categories';
    let backgroundColor = null;

    if (selected) {
      title = selected.name;
      backgroundColor = selected.color || null;
    }
    return (
      <article className="card">
        <header style={{ backgroundColor }}>
          <h6>{title}</h6>
        </header>
        <main>
          <div className="radio-group">
            {options.map(({ id, name, selected, multiSelect, recommended }) => {
              return (
                <label key={id} className="radio-inline">
                  <input
                    type="radio"
                    value={id}
                    checked={selected}
                    onChange={this.handleChange}
                  />
                  <span>{name}</span>{' '}
                  {showRecommendedPath && recommended &&
                    <span
                      className="fa fa-star fa-lg"
                      style={{ color: 'gold' }}
                    />
                  }
                </label>
              )
            })}
          </div>
        </main>
      </article>
    )
  }
}

Card.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  showRecommendedPath: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

export default Card;
