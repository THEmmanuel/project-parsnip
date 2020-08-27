import React, { useState } from 'react';
import { connect } from 'react-redux';
import TasksPage from './TasksPage';

const App = props => {
  return (
    <div className="main-content">
      <TasksPage tasks={props.tasks} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);