import React from 'react';

import classes from './App.module.css';
import Navigation from './components/Navigation/Navigation';
import Posts from './container/Posts/Posts';
import About from './container/About/About';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Navigation />
        <Route exact path="/">
          <Posts />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
