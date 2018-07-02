import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Layout, Affix, Button } from 'antd';

import Header from './Header';
import SideMenu from './SideMenu';
import Landing from './Landing';
import Footer from './Footer';

// dummy que devem ser transformados em componentes mais cedo ou mais tade
const Trampos = () => (
  <ul>
    <li>trampo 1</li>
    <li>trampo 2</li>
    <li>trampo 3</li>
  </ul>
);
const Informacao = () => <h2>Informacao</h2>;
const Contato = () => <h2>Contato</h2>;
const CriarTrampo = () => <h2>CriarTrampo</h2>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  collapseMenu = collapsed => {
    this.setState({
      ...this.state,
      collapsed: !this.state.collapsed
    });
  };

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const smallScreen = !window.matchMedia('(min-width: 470px)').matches;
    if (smallScreen) {
      return (
        <BrowserRouter>
          <Layout>
            <SideMenu
              collapsed={this.state.collapsed}
              onCollapse={this.collapseMenu}
            />
            <Layout>
              <Affix>
                <Button
                  onClick={this.collapseMenu}
                  id="toggle-menu"
                  update={this.state.collapsed}
                >Menu</Button>
              </Affix>
              <Layout.Content>
                <Route exact path="/" component={Landing} />
                <Route path="/trampos" component={Trampos} />
                <Route path="/contato" component={Contato} />
                <Route path="/informacao" component={Informacao} />
                <Route path="/trampos/novo" component={CriarTrampo} />
              </Layout.Content>
              <Footer />
            </Layout>
          </Layout>
        </BrowserRouter>
      );
    } else {
      return (
        <Layout className="layout">
          <BrowserRouter>
            <div className="container">
              <Affix>
                <Header />
              </Affix>
              <Layout.Content>
                <Route exact path="/" component={Landing} />
                <Route path="/trampos" component={Trampos} />
                <Route path="/contato" component={Contato} />
                <Route path="/informacao" component={Informacao} />
                <Route path="/trampos/novo" component={CriarTrampo} />
              </Layout.Content>
              <Footer />
            </div>
          </BrowserRouter>
        </Layout>
      );
    }
  }
}

export default connect(
  null,
  actions
)(App);
