import React from 'react';
import SubmissionsList from './SubmissionsList';
import SubmissionsListPage from './SubmissionsListPage';
import { select } from './SubmissionsListPage';
import { connect } from 'react-redux';
import { fetchSubmissionsList } from '../actions_creators/SubmissionsListActionsCreator';

class PendingSubmissionsPage extends SubmissionsListPage {
  static fetchData(dispatch, params) {
    return dispatch(fetchSubmissionsList('pending'));
  }

  componentWillMount() {
    PendingSubmissionsPage.fetchData(this.props.dispatch);
  }

  render() {
    return (
      <SubmissionsList attributes={this.attributes()}
        submissions={this.props.submissions} />
    );
  }
};

export default connect(select)(PendingSubmissionsPage);
