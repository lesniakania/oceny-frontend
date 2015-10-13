import React from 'react';
import { Link } from 'react-router';

class SubmissionsList extends React.Component {
  headersList() {
    return [];
  }

  tableBody() {
    return '';
  }

  submissionLink(submission) {
    return (<Link to={`/submissions/${submission.id}`}>Show</Link>);
  }

  render() {
    const tableHeaders = this.headersList().map(header => {
      return (
        <th key={header}>{header}</th>
      );
    });

    return (
      <div>
        <h2>You are in {this.props.route.type}</h2>
        <table className="SubmissionsList">
          <thead><tr>{tableHeaders}</tr></thead>
          {this.tableBody()}
        </table>
      </div>
    )
  }
};

export default SubmissionsList;
