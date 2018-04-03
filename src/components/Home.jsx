import React, { Component } from 'react';
import Navbar from './navbar/Navbar';

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
    return (
      <div>
        <Navbar
          src={src}
          title={title}
          onClick={onClick}
          counter={counter}
          select={select} />
      </div>
    );
  }
}

export default Home;