'use strict'

import React from 'react';


export default function TaskForm(props) {
  const handleSubmit = event=>{
    event.preventDefault();

    const newTask ={
      name: event.target.elements.task_name.value,
      desc: event.target.elements.task_desc.value
    }
    props.addTask(newTask);

    event.target.reset();
  }

  return (

  <div className="jumbotron">
    <h1>Task Manager</h1>
    <form className="form-inline" onSubmit={handleSubmit} >
      <div className="form-group">
        <label className="sr-only" htmlFor="task_name">Task</label>
        <input name="task_name" type="text" className="form-control input-lg" id="task_name" placeholder="Task Name"/>
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="task_desc">Description</label>
        <input name="task_desc" type="text" className="form-control input-lg" id="task_desc" placeholder="Task Description"/>
      </div>
      <button type="submit" className="btn btn-primary btn-lg">Submit</button>
    </form>
  </div>

    )

}


