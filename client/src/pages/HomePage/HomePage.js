// packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// styles & assets
import './HomePage.scss';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Link to="/projects">
          Projects
        </Link>
      </div>
    )
  }
}
