import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Layout, Menu } from 'antd';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'trampos' };
  }

  handleMenuClick = e => {
    if (e.key === 'contato') {
      this.setState({ selected: 'contato' });
      this.props.history.push('/contato');
    } else if (e.key === 'trampos') {
      this.setState({ selected: 'trampos' });
      this.props.history.push('/trampos');
    } else if (e.key === 'home') {
      this.setState({ selected: 'home' });
      this.props.history.push('/');
    } else {
      this.setState({ selected: null });
    }
  };

  tramposOrHome() {
    if (this.props.user) {
      return <Menu.Item key="trampos">Trampos</Menu.Item>;
    }
    return <Menu.Item key="home">Home</Menu.Item>;
  }

  loginOrLogout() {
    if (this.props.user) {
      return (
        <Menu.Item key="logout">
          <a href="/auth/logout">Logout</a>
        </Menu.Item>
      );
    }
    return (
      <Menu.SubMenu title={<span>Login</span>}>
        <Menu.Item key="login-google">
          <a href="/auth/google">Google</a>
        </Menu.Item>
        <Menu.Item key="login-facebook" disabled>
          Facebook
        </Menu.Item>
      </Menu.SubMenu>
    );
  }

  handleLogoClick = () => {
    if (this.props.user) {
      this.setState({ selected: 'trampos' });
      this.props.history.push('/trampos');
    } else {
      this.setState({ selected: 'home' });
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <Layout.Header>
        <div className="logo">
          <a onClick={this.handleLogoClick}>#trampei</a>
        </div>
        <Menu
          theme="dark"
          onClick={this.handleMenuClick}
          selectedKeys={[this.state.selected]}
          mode="horizontal"
          className="header"
        >
          {this.tramposOrHome()}
          <Menu.Item key="contato">Contato</Menu.Item>
          {this.loginOrLogout()}
        </Menu>
      </Layout.Header>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

const component = withRouter(Header);
export default connect(mapStateToProps)(component);
