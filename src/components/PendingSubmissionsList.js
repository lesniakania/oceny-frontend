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

  render() {
    return (
      <SubmissionsList attributes={['name']}
        submissions={this.state.submissions} />
    );
  }
};

export default PendingSubmissionsList;
