import React from 'react';
import ReactDOM from 'react-dom';

class SubmissionForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let firstNameNode = ReactDOM.findDOMNode(this.refs.firstName)
    const firstName = firstNameNode.value.trim();
    console.log(firstName);
    firstNameNode.value = '';

    let lastNameNode = ReactDOM.findDOMNode(this.refs.lastName)
    const lastName = lastNameNode.value.trim();
    console.log(lastName);
    lastNameNode.value = '';
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
