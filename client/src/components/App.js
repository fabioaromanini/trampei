import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SmallScreenApp from './SmallScreenApp';
import NormalScreenApp from './NormalScreenApp';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const smallScreen = !window.matchMedia('(min-width: 470px)').matches;
    return smallScreen ? <SmallScreenApp /> : <NormalScreenApp />;
  }
}

export default connect(
  null,
  actions
)(App);
