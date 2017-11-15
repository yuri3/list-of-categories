import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIds: [],
      selected: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { selected, selectedIds } = this.state;

    if (
      selected.id !== prevState.selected.id ||
      selectedIds.length !== prevState.selectedIds.length
    ) {
      const { data, updateSelected } = this.props;

      const currSelected = selected.id ? selected :
        selectedIds[selectedIds.length - 1];

      const obj = data.reduce((obj, curr) => {
        if (curr.parentId && curr.parentId === currSelected.id) {
          obj.options = [...obj.options, curr];
        }
        return obj;
      }, { options: [] });

      if (obj.options.length > 0) {
        obj.id = currSelected.value.name;
        updateSelected(obj, currSelected.index);
      }
    }
  }

  handleChange(event) {
    const { data, index } = this.props;

    const id = event.target.value;
    const value = data.find(d => d.id === id);

    const payload = { id: value.id, index, value };

    if (value.multiSelect) {
      this.setState((prevState) => ({
        selectedIds: [...prevState.selectedIds, payload]
      }))
    } else  {
      this.setState({ selected: payload });
    }
  }

  render() {
    const { item, showRecommendedPath } = this.props;
    const { selected, selectedIds } = this.state;
    const title = selected.id && item.options.length > 0 &&
      item.options.find(elm => elm.id === selected.id).name;
    const backgroundColor = selected.value ? selected.value.color : null;
    return (
      <article className="card">
        <header style={{ backgroundColor }}>
          <h6>{title || 'Categories'}</h6>
        </header>
        <main>
          <div className="radio-group">
            {item.options.map((elm) => {
              const id = elm.id;
              return (
                <label key={id} className="radio-inline">
                  <input
                    type="radio"
                    value={id}
                    checked={
                      selected.id === id || !!selectedIds.find(elm => elm.id === id)
                    }
                    onChange={this.handleChange}
                  />
                  <span>{elm.name}</span>{' '}
                  {showRecommendedPath && elm.recommended &&
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
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  showRecommendedPath: PropTypes.bool,
  updateSelected: PropTypes.func.isRequired,
  item: PropTypes.shape({}).isRequired,
  index: PropTypes.number.isRequired
};

export default Card;
