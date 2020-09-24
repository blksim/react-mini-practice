import React from 'react';

import classes from './Profile.module.css';

const profile = (props) => {
  return (<div className={classes.Profile}>
    <img src={props.src}></img>
  </div>)
};

export default profile;