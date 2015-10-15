import React from 'react';
import SubmissionsList from './SubmissionsList';

class EvaluatedSubmissionsList extends React.Component {
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
      submissions: [{ id: 1, name: 'Ania', mark: 5 }]
    });
  }

  render() {
    return (
      <SubmissionsList attributes={['name', 'mark']}
        submissions={this.state.submissions} />
    );
  }
};

export default EvaluatedSubmissionsList;
