import React from 'react';

import classes from './Post.module.css';

const post = (props) => {
  return (<div 
    className={classes.Post}
    onClick={props.click}>
    <h3>{props.title}</h3>
    <p>{props.body}</p>
  </div>)
};

export default post;

