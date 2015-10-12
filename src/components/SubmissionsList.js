import React from 'react';

class SubmissionsList extends React.Component {
  render() {
    return (
      <div className="SubmissionsList">
        You are in {this.props.route.type}
      </div>
    )
  }
};
export default SubmissionsList;
