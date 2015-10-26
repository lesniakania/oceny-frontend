import React from 'react';
import { connect } from 'react-redux';
import Rate from './Rate';
import Submission from './Submission';
import { performRating, fetchSubmission } from '../actions_creators/SubmissionActionsCreator';

class SubmissionPage extends React.Component {
  static fetchData(dispatch, params) {
    return dispatch(fetchSubmission(params.id));
  }

  performRating(value) {
    this.props.dispatch(performRating(this.props.submission, value));
  }

  render() {
    return (
      <div>
        <Submission submission={this.props.submission} />
        <Rate rate={this.props.submission.rate} performRating={this.performRating.bind(this)} />
      </div>
    )
  }
};

function select(state) {
  const id = state.router.params.id;
  return {
    submission: state.submissions[id] || {}
  };
}

export default connect(select)(SubmissionPage);
