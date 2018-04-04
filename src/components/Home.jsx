import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Accounts from './accounts/Accounts';
import Navbar from './navbar/Navbar.jsx';
import Dashboard from './dashboard/index'

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
        <div>
        <Navbar
          src={src}
          title={title}
          onClick={onClick} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route path="/Accounts" component={Accounts} />
        {/* <Route path="/Sucursales" component={Sucursales} /> */}
        </div>
      </Router>
    );
  }
}

export default Home;