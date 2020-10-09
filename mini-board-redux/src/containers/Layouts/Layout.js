import React, { Component } from 'react';

import classes from './Layout.module.css';
import Form from '../../components/UI/Form/Form';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Navigation from '../../components/UI/Navigation/Navigation';
import Posts from '../Posts/Posts';

class Layout extends Component {
  state = {
    clickedNav: ''
  };

  navigationHandler = () => {
    const navTitle = 'Login';
    this.setState({ clickedNav: navTitle });
  };

  render () {
    let modal = (
      <div>
        <Backdrop on={this.state.clickedNav ? true : false} />
        <Form
          on={this.state.clickedNav ? true : false}
          type={this.state.clickedNav}
          elements={['email', 'password']}
          change={(event) => this.inputChangeHandler(event)} 
        />
      </div>
    );
    
    return (
      <div className={classes.Layout}>
      {modal}
      <Navigation click={(event) => this.navigationHandler(event)}/>
      <h1>Click to delete a post 👇</h1>
      <Posts />
    </div>);
  }
}

export default Layout;