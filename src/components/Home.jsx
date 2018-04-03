import React, { Component } from 'react';
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
      <div>
        <Navbar
          src={src}
          title={title}
          onClick={onClick} />
      </div>
    );
  }
}

export default Home;