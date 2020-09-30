import React, { Component } from 'react';

import classes from './Layout.module.css';
import Posts from '../Posts/Posts';

class Layout extends Component {

  render () {
    return (<div className={classes.Layout}>
      <h1>Click to delete a post 👇</h1>
      <Posts />
    </div>);
  }
}

export default Layout;