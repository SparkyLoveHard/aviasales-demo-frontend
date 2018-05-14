import React, { Component } from 'react';
import './App.css';
import 'normalize.css';

import HomePage from "./HomePage/HomePage";
import SearchPage from "./SearchPage/SearchPage";
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={HomePage}/>
        <Route path="/searchpage" component={SearchPage}/>
      </div>
    );
  }
}

export default App;
