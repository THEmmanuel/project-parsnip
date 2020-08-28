import React, { useState } from 'react';
import { connect } from 'react-redux';
import TasksPage from './TasksPage';

const App = props => {

  const createTaskHandler = ({ title, description }) => {
    props.dispatch({
      type: 'CREATE_TASK',
      payload: {
        title,
        description
      }
    })
  }


  return (
    <div className="main-content">
      <TasksPage tasks={props.tasks} createTaskHandler = {createTaskHandler} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}


export default connect(mapStateToProps)(App);