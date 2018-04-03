import React, { Component } from 'react';
import firebase, { auth, provider, providerFace } from '../firebase.js';
import { Grid, Row, Col } from 'react-bootstrap';
import Home from './Home';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null // se inicializa el state del usuario en null
    };

    this.login = this.login.bind(this);
    this.facebookLogin = this.facebookLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

  // para que la sesión del usuario no se cierre al refrescar la página
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }

  facebookLogin() {
    auth.signInWithPopup(providerFace).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }

  render() {
    console.log(this.state);
    
    return (
      <div className="app">
        {this.state.user ? (
          <Home
            src={this.state.user.photoURL}
            title={this.state.user.displayName}
            onClick={this.logout}
          />
        ) : (
          <Grid>
            <Row id="login">
              <Col xs={12} sm={12} md={12} lg={12} className="items">
                  <Row className="text-center">
                    <div className="logo-container">
                      <img src="https://www.accenture.com/t20171027T083455Z__w__/dk-en/_acnmedia/Accenture/Conversion-Assets/NonSecureClients/Images/20/Accenture-Gradient-Yellow-Logo.png" className="logo img-responsive" />
                    </div>
                      <h2>Accenture Bank</h2>
                  </Row>
                  <Row className="text-center">
                      <button className="btn google" onClick={this.login}>
                        <span>Log in with Google</span>
                      </button>
                  </Row>
                  <Row className="text-center">
                      <button className="btn facebook" onClick={this.facebookLogin}>
                        <span>Log in with Facebook</span>
                      </button>
                  </Row>
              </Col>
            </Row>
          </Grid>
        )}
      </div>
    );
  }
}

export default Login;