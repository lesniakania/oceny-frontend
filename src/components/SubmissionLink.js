import React from 'react';
import { Link } from 'react-router';

class SubmissionLink extends React.Component {
  render() {
    return (<Link to={`/submissions/${this.props.submission_id}`}>Show</Link>);
  }
};

export default SubmissionLink;
