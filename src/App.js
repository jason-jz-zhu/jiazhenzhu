import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home/Home';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Route exact path='/' component={Home} />
        </div>
      </div>
    );
  }
}

export default App;
