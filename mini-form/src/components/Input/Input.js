import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
  let input = null;
  let errorMessage = '';

  if (props.invalid && props.touched && props.shouldValidate) {
    errorMessage = props.shouldValidate.minLength + '자 이상 ' 
    + props.shouldValidate.maxLength + '자 이하'; 
  }

  if (!props.invalid) {
    errorMessage = '';
  }

  if (props.type === 'textarea') {
    input = (<textarea 
      placeholder={props.placeholder}
      onChange={props.changed}>
     </textarea>);

  } else {
    input = (<input 
      placeholder={props.placeholder}
      onChange={props.changed}
      />);
  }

  return (<div>{input}<p className={classes.Message}>{errorMessage}</p></div>);
};

export default input;
