import React, { Component } from 'react';
import './App.css';
import 'normalize.css';

import HomePage from "./HomePage/HomePage";
import SearchPage from "./SearchPage/SearchPage";
import {Route,Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/search" component={SearchPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
