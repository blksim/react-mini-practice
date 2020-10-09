import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
  let input = null;
  const inputType = props.inputType;

  if (inputType === 'textarea') {
    input = (<textarea 
      className={classes.Textarea}
      onChange={props.change} />);
  } else {
    input = (<input 
      type={inputType}
      className={classes.Input}
      onChange={props.change} />);
  }

  return input;
};

export default input;