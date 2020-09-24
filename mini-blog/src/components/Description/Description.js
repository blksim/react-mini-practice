import React from 'react';

import classes from './Description.module.css';

const description = (props) => {
  return (
    <div className={classes.Description}>
      <p>{props.content}</p>
    </div>
  );
}

export default description;