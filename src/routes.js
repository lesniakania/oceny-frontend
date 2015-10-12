import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/Main';
import SubmissionsList from './components/SubmissionsList'

export default (
  <Route path="/" component={Main}>
    <Route path="pending" component={SubmissionsList} type="pending" />
    <Route path="evaluated" component={SubmissionsList} type="evaluated" />
    <Route path="rejected" component={SubmissionsList} type="rejected" />
  </Route>
);

