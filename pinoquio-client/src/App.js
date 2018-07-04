import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import QuemSomos from './components/QuemSomos/QuemSomos';
import Contato from './components/Contato/Contato';
import Login from './components/LogIn/LogIn';
import Trampos from './components/Trampos/Trampos';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/trampos" component={Trampos} />
          <Route path="/contato" component={Contato} />
          <Route path="/quemsomos" component={QuemSomos} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
