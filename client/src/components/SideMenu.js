import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Menu, Layout } from 'antd';

class SideMenu extends Component {
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
  };

  render() {
    return (
      <Layout.Sider
        collapsible
        collapsed={this.props.collapsed}
        onCollapse={this.props.onCollapse}
        trigger={null}
        collapsedWidth={0}
      >
        <Menu
          theme="dark"
          onClick={this.handleMenuClick}
          selectedKeys={[this.state.selected]}
          mode="inline"
          className="side-menu"
        >
          {this.tramposOrHome()}
          <Menu.Item key="contato">Contato</Menu.Item>
          {this.loginOrLogout()}
        </Menu>
      </Layout.Sider>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

const component = withRouter(SideMenu);
export default connect(mapStateToProps)(component);
