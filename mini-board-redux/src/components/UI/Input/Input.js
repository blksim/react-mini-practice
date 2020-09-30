import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
  let input = null;

  if (props.inputType === 'text') {
    input = (<input 
    className={classes.Input}
    onChange={props.change} />);
  };

  if (props.inputType === 'textarea') {
    input = (<textarea 
      className={classes.Textarea}
      onChange={props.change} />);
  }
  
  return input;
};

export default input;