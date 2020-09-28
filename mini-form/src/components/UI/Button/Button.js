import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
  return (<button 
    className={classes.Button}
    disabled={props.disabled}>
    {props.value}</button>)
};

export default button;