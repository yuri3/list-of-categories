import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Filter from './Filter';
import Card from './Card';

class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      showRecommendedPath: false,
      disableAutoScroll: false
    };

    this.toggleRecommendedPath = this.toggleRecommendedPath.bind(this);
    this.toggleDisableAutoScroll = this.toggleDisableAutoScroll.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
  }

  componentDidMount() {
    let id = null;
    const obj = this.props.data.reduce((obj, curr) => {
      if (!curr.parentId && !obj[curr.id]) {
        obj.options = [...obj.options, curr];

        if (curr.title !== id) {
          id = curr.title;
        }
      }
      return obj;
    }, { options: [] });
    obj.id = id;
    this.setState({ selected: [obj] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.disableAutoScroll) {
      this.scrollToBottom();
    }
  }

  toggleRecommendedPath() {
    this.setState(prevState =>
      ({ showRecommendedPath: !prevState.showRecommendedPath }));
  }

  toggleDisableAutoScroll() {
    this.setState((prevState) =>
      ({ disableAutoScroll: !prevState.disableAutoScroll }));
  }

  scrollToBottom() {
    this.list.scrollIntoView();
  }

  updateSelected(data, index) {
    this.setState((prevState) => {
      return {
        selected: [
          ...prevState.selected.filter((elm, i) => i <= index),
          data
        ]
      }
    });
  }

  render() {
    const { data }  = this.props;
    const { selected, showRecommendedPath, disableAutoScroll } = this.state;
    console.log('data', data, 'selected', selected);

    const filterProps = {
      showRecommendedPath,
      disableAutoScroll,
      toggleRecommendedPath: this.toggleRecommendedPath,
      toggleDisableAutoScroll: this.toggleDisableAutoScroll
    };

    const cardProps = {
      data,
      showRecommendedPath,
      updateSelected: this.updateSelected,
    };

    return (
      <div ref={input => this.list = input}>
        <Filter {...filterProps} />
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionLeave={false}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={0}
        >
          {selected.map((item, i) =>
            <Card key={item.id} item={item} index={i} {...cardProps} />
          )}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

Tree.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Tree;
