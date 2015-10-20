import React from 'react';

class Submission extends React.Component {
  render() {
    return (
      <div className="submission">
        <h2>Submission</h2>
        <ul>
          <li>Id: {this.props.submission.id}</li>
          <li>First Name: {this.props.submission.first_name}</li>
          <li>Last Name: {this.props.submission.last_name}</li>
        </ul>
      </div>
    )
  }
};

export default Submission;
