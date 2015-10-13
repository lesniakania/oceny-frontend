import React from 'react';
import SubmissionsList from './SubmissionsList';

class PendingSubmissionsList extends SubmissionsList {
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
      submissions: [{ id: 1, name: 'Ania' }, { id: 2, name: 'Tomek' }]
    });
  }

  headersList() {
    return ['Name'];
  }

  tableBody() {
    const body = this.state.submissions.map(submission => {
      return (
        <tr key={submission.id}>
          <td>{submission.name}</td>
          <td>{this.submissionLink(submission)}</td>
        </tr>
      );
    });

    return (
      <tbody>{body}</tbody>
    );
  }
};

export default PendingSubmissionsList;
