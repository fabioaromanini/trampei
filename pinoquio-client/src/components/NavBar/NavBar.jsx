import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './NavBar.css';

class NavBar extends Component {
  greetings() {
    if (this.props.user) {
      return <span id="greetings">Olá, {this.props.user.name}</span>;
    }
  }

  loginOrLogout() {
    if (this.props.user) {
      return <a href="/auth/logout">Logout</a>;
    } else {
      return <Link to="/login">Log in</Link>;
    }
  }

  trampos() {
    if (this.props.user) {
      return <Link to="/trampos">Trampos</Link>;
    }
  }

  render() {
    return (
      <div className="NavBar">
        <div className="NavBar_Logo">
          <Link to="/">#trampei</Link>
        </div>
        <div className="NavBar_menu">
          {this.greetings()}
          <Link to="/contato">Contato</Link>
          <Link to="/quemsomos">Quem somos</Link>
          {this.trampos()}
          {this.loginOrLogout()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(NavBar);
