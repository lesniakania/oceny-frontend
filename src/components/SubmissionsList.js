import React from 'react';
import SubmissionLink from './SubmissionLink';

class SubmissionsList extends React.Component {
  render() {
    const headers = this.props.attributes.map(header => {
      return (
        <th key={`header-${header}`}>{header}</th>
      );
    });

    const body = this.props.submissions.map(submission => {
      const tr = this.props.attributes.map(attribute => {
        return (<td key={`value-${attribute}`}>{submission[attribute]}</td>);
      });

      return (
        <tr key={submission.id}>
          {tr}
          <td><SubmissionLink submission_id={submission.id} /></td>
        </tr>
      );
    });

    return (
      <table>
        <thead><tr>{headers}</tr></thead>
        <tbody>{body}</tbody>
      </table>
    )
  }
};

export default SubmissionsList;
