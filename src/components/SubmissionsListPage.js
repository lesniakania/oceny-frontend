import React from 'react';

class SubmissionsListPage extends React.Component {
  defaultAttributes() {
    return ['first_name', 'last_name'];
  }

  additionalAttributes() {
    return [];
  }

  attributes() {
    return this.defaultAttributes().concat(this.additionalAttributes());
  }
};

export function select(state) {
  const values = Object.keys(state.submissions).map(k => state.submissions[k]);
  return {
    submissions: values
  };
}

export default SubmissionsListPage;
