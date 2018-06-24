import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        // quando o request tá demorando, é isso que é mostrado
        return '...';
      case false:
        return (
          <li>
            <a href="/auth/google">logar com o google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/auth/logout">logout</a>
          </li>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/trampos' : '/'}
            className="brand-logo left"
          >
            trampei
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
