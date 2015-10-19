import React from 'react';
import RateButton from './RateButton';

const AVAILABLE_RATES = [1, 2, 3, 4, 5];

class Rate extends React.Component {
  render() {
    const ratesInputs = AVAILABLE_RATES.map(value => {
      return <RateButton key={`rate-${value}`} value={value}
        performRating={this.props.performRating} />
    });
    return (
      <div>
        <div>{ratesInputs}</div>
        <div>{this.props.rate}</div>
      </div>
    )
  }
}

export default Rate;
