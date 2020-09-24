import React from 'react';

import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const navigation = (props) => {
  return (
    <nav className={classes.Navigation}>
      <ul>
        <NavLink className={classes.NavLink} to="/" exact activeClassName={classes.Active}>Home</NavLink>
        <NavLink className={classes.NavLink} to="/about" activeClassName={classes.Active}>About</NavLink>
      </ul>
    </nav>
  );
};

export default navigation;