import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/Main';
import PendingSubmissionsList from './components/PendingSubmissionsList';
import RejectedSubmissionsList from './components/RejectedSubmissionsList';
import EvaluatedSubmissionsList from './components/EvaluatedSubmissionsList';
import SubmissionsList from './components/SubmissionsList';
import Submission from './components/Submission';
import SubmissionForm from './components/SubmissionForm';

export default (
  <Route path="/" component={Main}>
    <Route path="pending" component={PendingSubmissionsList} type="pending" />
    <Route path="evaluated" component={EvaluatedSubmissionsList} type="evaluated" />
    <Route path="rejected" component={RejectedSubmissionsList} type="rejected" />
    <Route path="submissions/new" component={SubmissionForm} />
    <Route path="submissions/:id" component={Submission} />
  </Route>
);

