import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar.jsx';

class Home extends Component {
  constructor(src, title, onClick) {
    super(src, title, onClick);
    this.state = {
      src,
      title,
      onClick,
    };
  }
  render() {
    const { src } = this.props;
    const { title } = this.props;
    const { onClick } = this.props;
    return (
      <Router>
        <Navbar
          src={src}
          title={title}
          onClick={onClick} />

      </Router>
    );
  }
}

export default Home;