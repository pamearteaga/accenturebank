import React, { Component } from 'react';
import '../navbar/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <img src="https://www.accenture.com/t20171027T083455Z__w__/dk-en/_acnmedia/Accenture/Conversion-Assets/NonSecureClients/Images/20/Accenture-Gradient-Yellow-Logo.png" />
            <a className="navbar-brand" href="#">Accenture Bank</a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>{/* /.navbar-collapse */}
        </div>{/* /.container-fluid */}
      </nav>
      </div>
    );
  }
}

export default Navbar;