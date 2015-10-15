import React from 'react';
import SubmissionsList from './SubmissionsList';

class RejectedSubmissionsList extends React.Component {
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

  render() {
    return (
      <SubmissionsList attributes={['name', 'reason']}
        submissions={this.state.submissions} />
    );
  }
};

export default RejectedSubmissionsList;
