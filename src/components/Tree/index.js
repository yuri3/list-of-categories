import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import List from './List';

class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showRecommendedPath: false,
      disableAutoScroll: false
    };

    this.toggleRecommendedPath = this.toggleRecommendedPath.bind(this);
    this.toggleDisableAutoScroll = this.toggleDisableAutoScroll.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.getAllDescendantIds = this.getAllDescendantIds.bind(this);
  }

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  componentDidUpdate() {
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

  getAllDescendantIds(state, id) {
    const elmsToDelete = state.filter(elm => elm.parentId === id);
    return elmsToDelete.reduce((acc, curr) => (
      [...acc, curr.id, ...this.getAllDescendantIds(state, curr.id)]
    ), []);
  }

  handleChange(selectedValue) {
    const prevSelected = this.state.data.find(elm => (
       elm.id !== selectedValue.parentId &&
       elm.parentId === selectedValue.parentId && elm.selected
    ));

    let descendantIds;
    if (prevSelected) {
      descendantIds = [
        prevSelected.id,
        ...this.getAllDescendantIds(this.state.data, prevSelected.id)
      ]
    }

    const data = this.state.data.map(d => {
      const target = descendantIds && descendantIds.find(id => id === d.id);
      if (target && !d.multiSelect && d.selected) {
        return {...d, selected: false};
      }
      if (d.id === selectedValue.id) {
        return { ...d, selected: true };
      }
      return d;
    });

    this.setState({ data });
  }

  render() {
    const { data, showRecommendedPath, disableAutoScroll } = this.state;

    return (
      <div ref={input => this.list = input}>
        {data.length > 0 &&
          <div>
            <Filter
              showRecommendedPath={showRecommendedPath}
              disableAutoScroll={disableAutoScroll}
              toggleRecommendedPath={this.toggleRecommendedPath}
              toggleDisableAutoScroll={this.toggleDisableAutoScroll}
            />
            <List
              data={data}
              parentId={null}
              showRecommendedPath={showRecommendedPath}
              handleChange={this.handleChange}
            />
          </div>
        }
      </div>
    )
  }
}

Tree.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Tree;
