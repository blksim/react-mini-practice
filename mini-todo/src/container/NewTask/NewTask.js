import React, { Component } from 'react';

import classes from './NewTask.module.css';

class newTask extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  handleState = () => {
    const value = this.myRef.current.value;
    console.log(value);
    this.props.click(value);
  }

  render () {
    return <div className={classes.NewTask}>
      <input type="text" placeholder="What do you want to do?" ref={this.myRef}/>
      <button onClick={this.handleState}>ADD!</button>
    </div>;
  }
}

export default newTask;