import React, { useState } from 'react';
import './App.css';
import TasksPage from './TasksPage';

const App = props => {
  return (
    <div className="main-content">
      <TasksPage tasks={mockTasks} />
    </div>
  );
}

export default App;