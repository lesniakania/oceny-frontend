import React from 'react';
import SubmissionsList from './SubmissionsList';

class RejectedSubmissionsList extends SubmissionsList {
  constructor(props) {
    super(props);
    this.state = {
      submissions: []
    };
  }

  componentDidMount() {
    this.loadSubmissions()
  }

  loadSubmissions() {
    this.setState({
      submissions: [{ id: 1, name: 'Ania', reason: 'Too young' }]
    });
  }

  headersList() {
    return ['Name', 'Reason'];
  }

  tableBody() {
    const body = this.state.submissions.map(submission => {
      return (
        <tr key={submission.id}>
          <td>{submission.name}</td>
          <td>{submission.reason}</td>
        </tr>
      );
    });

    return (
      <tbody>{body}</tbody>
    );
  }
};

export default RejectedSubmissionsList;
