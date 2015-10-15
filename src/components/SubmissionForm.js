import React from 'react';
import ReactDOM from 'react-dom';

class SubmissionForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const firstName = this.refs.firstName.value.trim();
    console.log(firstName);
    this.refs.firstName.value = '';

    const lastName = this.refs.lastName.value.trim();
    console.log(lastName);
    this.refs.lastName.value = '';
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
