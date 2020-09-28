import React, { Component } from 'react';

import classes from './Layout.module.css';
import Form from '../../components/Form/Form';

class Layout extends Component {
  state = {
    hit: 0
  }

  render () {
    return <main className={classes.Layout}>
      {/* <span><img src="" ></img>{this.state.hit}</span> */}
      <Form />
    </main>;
  };
}

export default Layout;