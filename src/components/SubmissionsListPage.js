import React from 'react';
import SubmissionsList from './SubmissionsList';
import SubmissionsStore from '../stores/SubmissionsStore';

class SubmissionsListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submissions: []
    };
  }

  componentDidMount() {
    SubmissionsStore.getSubmissions(this.submissionsType()).then((response) => {
      this.setState({ submissions: response.data });
    });
  }

  defaultAttributes() {
    return ['first_name', 'last_name'];
  }

  render() {
    const attributes = this.defaultAttributes().concat(this.attributes);
    return (
      <SubmissionsList attributes={attributes}
        submissions={this.state.submissions} />
    );
  }
};

export default SubmissionsListPage;
