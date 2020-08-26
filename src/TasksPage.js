import React, { useState } from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

const TasksPage = props => {
    const renderTaskLists = () => {
        const { tasks } = props;
        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => task.status === status);
            return <TaskList key={status} status={status} tasks={statusTasks} />
        })
    }

    return (
        <div className="tasks">
            <div className="task-lists">
                {renderTaskLists()}
            </div>
        </div>
    )
}

export default TasksPage;