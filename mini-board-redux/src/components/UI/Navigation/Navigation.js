import React from 'react';

import classes from './Navigation.module.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const navigation = (props) => {
  return (<nav className={classes.Navigation}>
    <Router>
      <NavLink 
        className={classes.NavItem} 
        to="/login" 
        onClick={props.click}>Login</NavLink>
      <NavLink 
        className={classes.NavItem} 
        to="/signup" 
        onClick={props.click}>Signup</NavLink>
    </Router>
  </nav>);
};

export default navigation;