import React from 'react';
import SubmissionsList from './SubmissionsList';
import SubmissionsListPage from './SubmissionsListPage';
import { select } from './SubmissionsListPage';
import { connect } from 'react-redux';
import { fetchSubmissionsList } from '../actions_creators/SubmissionsListActionsCreator';

class RejectedSubmissionsPage extends SubmissionsListPage {
  static fetchData(dispatch, params) {
    return dispatch(fetchSubmissionsList('rejected'));
  }

  componentWillMount() {
    RejectedSubmissionsPage.fetchData(this.props.dispatch);
  }

  additionalAttributes() {
    return ['reason'];
  }

  render() {
    return (
      <SubmissionsList attributes={this.attributes()}
        submissions={this.props.submissions} />
    );
  }
};

export default connect(select)(RejectedSubmissionsPage);

