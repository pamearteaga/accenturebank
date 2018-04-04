import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';

class Navbar extends Component {
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
              <li>
                <div className="profile">
                  <img src={src} alt="profilePhoto" className="img-circle img-responsive"/>
                  <p>{title}</p>
                </div>
              </li>
              <li><Link to="/Dashboard"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>Resumen cuentas</Link></li>
              <li><Link to="/Accounts"><span class="glyphicon glyphicon-list" aria-hidden="true"></span>Mis cuentas</Link></li>
              <li><Link to="/Sucursales"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>Sucursales</Link></li>
              <li><a href="#" onClick={onClick}><span class="glyphicon glyphicon-off" aria-hidden="true"></span>Logout</a></li>
            </ul>
          </div>{/* /.navbar-collapse */}
        </div>{/* /.container-fluid */}
      </nav>

      </div>
    );
  }
}

export default Navbar;
