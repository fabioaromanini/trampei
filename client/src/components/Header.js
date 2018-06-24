import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderMenu() {
    switch (this.props.user) {
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

  renderName() {
    if (this.props.user) {
      return <li>{"oi " + this.props.user.name || ''}</li>;
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.user ? '/trampos' : '/'}
            className="brand-logo left"
          >
            trampei
          </Link>
          <ul className="right">
            {this.renderName()}
            {this.renderMenu()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Header);
