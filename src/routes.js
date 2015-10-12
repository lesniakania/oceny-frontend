import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/Main';
import PendingSubmissionsList from './components/PendingSubmissionsList'
import SubmissionsList from './components/SubmissionsList'

export default (
  <Route path="/" component={Main}>
    <Route path="pending" component={PendingSubmissionsList} type="pending" />
    <Route path="evaluated" component={SubmissionsList} type="evaluated" />
    <Route path="rejected" component={SubmissionsList} type="rejected" />
  </Route>
);

