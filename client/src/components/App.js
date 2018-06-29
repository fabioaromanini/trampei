import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Layout } from 'antd';

import Header from './Header';
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
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Layout className="layout">
        <BrowserRouter>
          <div className="container">
            <Header />
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

export default connect(
  null,
  actions
)(App);
