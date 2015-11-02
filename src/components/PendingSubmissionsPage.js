import React from 'react';
import SubmissionsList from './SubmissionsList';
import Connection from '../lib/Connection';

class PendingSubmissionsPage extends SubmissionsList {
  constructor(props) {
    super(props);
    this.state = {
      submissions: []
    };
  }

  componentDidMount() {
    Connection.get('/submissions/pending').then((response) => {
      this.setState({ submissions: response.data });
    });
  }

  render() {
    return (
      <SubmissionsList attributes={['first_name', 'last_name']}
        submissions={this.state.submissions} />
    );
  }
};

export default PendingSubmissionsPage;
