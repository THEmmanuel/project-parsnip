import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TasksPage from './TasksPage';
import { createTask, editTask, fetchTasks} from './actions/index'

const App = props => {

  useEffect(props.dispatch(fetchTasks()), [])

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
        statusChangeHandler={statusChangeHandler} 
        isLoading = {props.isLoading}
        />
    </div>
  );
}

const mapStateToProps = state => {
  const {tasks, isLoading} = state.tasks;
  return {
    tasks, isLoading
  }
}


export default connect(mapStateToProps)(App);