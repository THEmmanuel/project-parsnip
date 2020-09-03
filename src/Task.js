import React from 'react';

const TASK_STATUSES = [
    'Unstarted',
    'In progress',
    'Completed'
]

const Task = props => {

    const statusChangedHandler = e => {
        statusChangedHandler(props.task.id, e.target.value)
    }


    return (
        <div className='task'>
            <div className='task-header'>
                <div>{props.task.title}</div>
            </div>
            <select value={props.task.status} onChange={statusChangedHandler}>
                {TASK_STATUSES.map(status =>
                    <option key={status} value={status}> {status} </option>)}
            </select>
            <hr />
            <div className='task-body'>{props.task.description}</div>
        </div>
    )
}

export default Task;