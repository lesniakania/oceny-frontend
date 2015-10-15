import React from 'react';
import SubmissionsList from './SubmissionsList';
import Connection from '../lib/Connection';

class PendingSubmissionsList extends SubmissionsList {
  constructor(props) {
    super(props);
    this.state = {
      submissions: []
    };
  }

  componentDidMount() {
    Connection.get('/submissions/pending', (response) => {
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

export default PendingSubmissionsList;
