import React from 'react';
import SubmissionsList from './SubmissionsList';
import Connection from '../lib/Connection';

class RejectedSubmissionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submissions: []
    };
  }

  componentDidMount() {
    Connection.get('/submissions/rejected', (response) => {
      this.setState({ submissions: response.data });
    });
  }

  render() {
    return (
      <SubmissionsList attributes={['first_name', 'reason']}
        submissions={this.state.submissions} />
    );
  }
};

export default RejectedSubmissionsList;
