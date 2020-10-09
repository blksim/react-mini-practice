import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = (props) => {
  let classList = [classes.Backdrop];
  if (props.on) {
    classList.push(classes.Active);
  } else {
    classList.push(classes.Clicked);
  }
  return <div className={ props.on ? classList.join(' ') : null}></div>;
};

export default backdrop;