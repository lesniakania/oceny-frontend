import React from 'react';
import Connection from '../lib/Connection';
import Rate from './Rate';

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

  performRating(value) {
    this.setState({ rate: value });
    // call to API
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
        <Rate rate={this.state.rate} performRating={this.performRating.bind(this)} />
      </div>
    )
  }
};

export default Submission;
