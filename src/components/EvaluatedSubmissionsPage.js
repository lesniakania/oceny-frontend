import React from 'react';
import SubmissionsList from './SubmissionsList';
import Connection from '../lib/Connection';

class EvaluatedSubmissionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submissions: []
    };
  }

  componentDidMount() {
    Connection.get('/submissions/evaluated').then((response) => {
      this.setState({ submissions: response.data });
    });
  }

  render() {
    return (
      <SubmissionsList attributes={['first_name', 'avg_mark']}
        submissions={this.state.submissions} />
    );
  }
};

export default EvaluatedSubmissionsPage;
