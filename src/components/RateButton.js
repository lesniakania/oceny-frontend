import React from 'react';

class RateButton extends React.Component {
  handleClick() {
    this.props.performRating(this.props.value);
  }

  render() {
    return (
      <button type='button' onClick={this.handleClick.bind(this)}>
        {this.props.value}
      </button>
    )
  }
}

export default RateButton;
