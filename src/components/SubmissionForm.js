import React from 'react';
import ReactDOM from 'react-dom';
import Connection from '../lib/Connection';

class SubmissionForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const firstName = this.refs.firstName.value.trim();
    const lastName = this.refs.lastName.value.trim();
    this.refs.firstName.value = '';
    this.refs.lastName.value = '';

    const data = {
      submission: {
        first_name: firstName,
        last_name: lastName
      }
    };
    Connection.post('/submissions', data, () => {
      console.log(data);
    });
  }

  render() {
    return (
      <form className="submission-form" onSubmit={this.handleSubmit.bind(this)}>
        <div><input name="Name" ref="firstName" /></div>
        <div><input name="Lastname" ref="lastName" /></div>
        <div><input type="submit" value="Submit" /></div>
      </form>
    )
  }
};

export default SubmissionForm;
