import React from 'react';
import './App.css';
import 'normalize.css';
import 'flexboxgrid2';

import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import SearchPage from './SearchPage/SearchPage';


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </div>
  );
};

export default App;
