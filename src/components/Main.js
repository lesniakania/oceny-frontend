import React from 'react';
import { Link } from 'react-router'

class Main extends React.Component {
  render() {
    return (
      <div>
        <ul className="menu">
          <li><Link to="/pending">Pending</Link></li>
          <li><Link to="/evaluated">Evaluated</Link></li>
          <li><Link to="/rejected">Rejected</Link></li>
          <li><Link to="/submissions/new">Submission form</Link></li>
        </ul>
        <div className="clear">
          {this.props.children}
        </div>
      </div>
    )
  }
};

export default Main;
