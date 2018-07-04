import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from './actions';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import QuemSomos from './components/QuemSomos/QuemSomos';
import Contato from './components/Contato/Contato';
import Login from './components/LogIn/LogIn';
import Trampos from './components/Trampos/Trampos';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  privateRoutes() {
    if (this.props.user) return <Route path="/trampos" component={Trampos} />;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div id="content">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/contato" component={Contato} />
            <Route path="/quemsomos" component={QuemSomos} />
            {this.privateRoutes()}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(
  mapStateToProps,
  actions
)(App);
