import React from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import classes from './Form.module.css';

const form = (props) => {
  let classList = [classes.Form];
  if (props.on) {
    classList.push(classes.Active);
  }
  return (
    <form className={classList}>
      {
        props.elements.map((element) => {
          return (
          <Input
            name={element.type} 
            inputType={element.type} 
            change={element.change}
          />)
        })
      }
      <Button value={props.type} disabled />
    </form>
  )
};

export default form;