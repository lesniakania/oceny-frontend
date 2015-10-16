import React from 'react';
import Connection from '../lib/Connection';

class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submission: {} };
  }

  componentDidMount() {
    const submission_id = this.props.params.id;
    Connection.get(`/submissions/${submission_id}`, (response) => {
      this.setState({ submission: response.data });
    });
  }

  render() {
    const submission = this.state.submission;

    return (
      <div className="submission">
        <h2>Submission</h2>
        <ul>
          <li>Id: {submission.id}</li>
          <li>First Name: {submission.first_name}</li>
          <li>Last Name: {submission.last_name}</li>
        </ul>
      </div>
    )
  }
};

export default Submission;
