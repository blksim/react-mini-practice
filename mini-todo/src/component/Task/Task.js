import React from 'react';

import classes from './Task.module.css';

const task = (props) => {

return <div className={classes.Task}>
    <input  value={props.content} readOnly/>
      <button text="Del" onClick={props.del}>COMPLETE</button>
    </div>;
}
export default task;