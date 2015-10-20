import React from 'react';
import Rate from './Rate';
import Submission from './Submission';
import SubmissionStore from '../stores/SubmissionStore';
import SubmissionActionsCreator from '../actions/SubmissionActionsCreator';

class SubmissionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submission: {} };
    this._onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const id = this.props.params.id;
    SubmissionActionsCreator.requestSubmission(id);
  }

  componentWillMount() {
    SubmissionStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    SubmissionStore.removeChangeListener(this._onChange);
  }

  onChange() {
    this.setState({ submission: SubmissionStore.getSubmission() });
  }

  performRating(value) {
    const id = this.state.submission.id;
    SubmissionActionsCreator.performRating(id, value);
  }

  render() {
    const submission = this.state.submission;

    return (
      <div>
        <Submission submission={submission} />
        <Rate rate={submission.rate} performRating={this.performRating.bind(this)} />
      </div>
    )
  }
};

export default SubmissionPage;
