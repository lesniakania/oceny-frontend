import React from 'react';
import Connection from '../lib/Connection';
import Rate from './Rate';

class SubmissionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submission: {} };
  }

  componentDidMount() {
    const submission_id = this.props.params.id;
    Connection.get(`/submissions/${submission_id}`).then((response) => {
      this.setState({ submission: response.data });
    });
  }

  performRating(rate) {
    const submission = this.state.submission;
    Connection.post(`/submissions/${submission.id}/rate`, { rate: rate }).then(
      (response) => {
      this.setState({ submission: response.data });
    });
  }

  render() {
    const submission = this.state.submission;

    return (
      <div>
        <div className="submission">
          <h2>Submission</h2>
          <ul>
            <li>Id: {submission.id}</li>
            <li>First Name: {submission.first_name}</li>
            <li>Last Name: {submission.last_name}</li>
          </ul>
        </div>
        <Rate rate={submission.rate} performRating={this.performRating.bind(this)} />
      </div>
    )
  }
};

export default SubmissionPage;
