import React from 'react';
import SubmissionsListPage from './SubmissionsListPage';

class PendingSubmissionsPage extends SubmissionsListPage {
  submissionsType() {
    return 'pending';
  }

  attributes() {
    return [];
  }
};

export default PendingSubmissionsPage;
