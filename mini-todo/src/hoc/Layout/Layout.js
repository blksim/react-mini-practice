import React, { Component } from 'react';

import NewTask from '../../container/NewTask/NewTask';
import TaskList from '../../container/TaskList/TaskList';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks: []}
  }

  clickHandler = (value) => {
    const updated = [...this.state.tasks];
    updated.push({task: value, isCompleted: false, id: Math.floor(Math.random()*100000)});
    this.setState({tasks: updated});
  }

  editHandler = (id, value) => {
    const updated = [...this.state.tasks]
    .map((task) => {
      if (task.id === id) {
        task.task = value;
      }
      return updated;
    });
    this.setState({tasks: updated});
  }

  deleteHandler = (id) => {
    console.log(id);
    let updated = [...this.state.tasks];
    updated.map((task, index) => {
      if (task.id === id) {
        updated.splice(index, 1);
        return updated;
      }
    });
    console.log(updated);
    this.setState({tasks: updated});
  }

  render () {
    return <div>
        <NewTask click={this.clickHandler}/>
        <TaskList 
          list={this.state.tasks}
          edit={this.editHandler} 
          delete={this.deleteHandler}
        />
      </div>;
  }
}



export default Layout;