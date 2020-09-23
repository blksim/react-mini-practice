import React, { Component } from 'react';
import classes from './TaskList.module.css';

import Task from '../../component/Task/Task';

class TaskList extends Component {
  constructor(props) {
    super();
    console.log(props.list);
  }

  render () {
   const tasks = [...this.props.list].map((task) => {
    return <Task
      key={task.id} 
      content={task.task} 
      edit={this.editHandler} 
      del={() => this.props.delete(task.id)}/>
   });
    return <ul className={classes.TaskList}>
      {tasks}
    </ul>;
  };
}

export default TaskList;