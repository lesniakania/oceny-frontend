import React from 'react';
import SubmissionsListPage from './SubmissionsListPage';

class RejectedSubmissionsPage extends SubmissionsListPage {
  submissionsType() {
    return 'rejected';
  }

  attributes() {
    return ['reason'];
  }
};

export default RejectedSubmissionsPage;
