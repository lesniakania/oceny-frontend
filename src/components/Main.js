import React from 'react';
import { Link } from 'react-router'

class Main extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/pending">Pending</Link></li>
          <li><Link to="/evaluated">Evaluated</Link></li>
          <li><Link to="/rejected">Rejected</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
};

export default Main;
