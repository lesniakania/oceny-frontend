import React from 'react';
import SubmissionsListPage from './SubmissionsListPage';

class EvaluatedSubmissionsPage extends SubmissionsListPage {
  submissionsType() {
    return 'evaluated';
  }

  attributes() {
    return ['mark'];
  }
};

export default EvaluatedSubmissionsPage;
