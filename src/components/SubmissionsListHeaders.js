import React from 'react';

class SubmissionsListHeaders extends React.Component {
  render() {
    const headers = this.props.headers.map(header => {
      return (
        <th key={header}>{header}</th>
      );
    });

    return (<thead><tr>{headers}</tr></thead>)
  }
};

export default SubmissionsListHeaders;
