import React, { useState } from 'react';
import { connect } from 'react-redux';
import TasksPage from './TasksPage';
import { createTask, editTask } from './actions/index'

const App = props => {

  const createTaskHandler = ({ title, description }) => {
    props.dispatch(createTask({ title, description }));
  }

  const statusChangeHandler = (id, status) => {
    props.dispatch(editTask(id, { status }))
  }


  return (
    <div className="main-content">
      <TasksPage tasks={props.tasks}
        createTaskHandler={createTaskHandler}
        statusChangeHandler={statusChangeHandler} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}


export default connect(mapStateToProps)(App);