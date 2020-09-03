import React, { useState } from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

const TasksPage = props => {
    const [state, setstate] = useState({
        showNewCardForm: false,
        title: '',
        description: '',
    })

    const titleChangeHandler = e => {
        setstate({
            title: e.target.value
        })
    }

    const descriptionChangeHandler = e => {
        setstate({
            description: e.target.value
        })
    }


    const resetFormHandler = () => {
        setstate({
            showNewCardForm: false,
            title: '',
            description: ''
        })
    }

    const createTaskHandler = e => {
        e.preventDefault()
        props.createTaskHandler(
            {
                title: state.title,
                description: state.description
            }
        )
        resetFormHandler();
    }

    const toggleFormHandler = () => {
        setstate({
            showNewCardForm: !state.showNewCardForm
        })
    }

    const renderTaskLists = () => {
        const { tasks } = props;
        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => task.status === status);
            return <TaskList
                key={status}
                status={status}
                tasks={statusTasks}
                statusChangedHandler={props.statusChangedHandler}
            />
        })
    }


    // {renderTaskLists()}

    return (
        <div className="task-list">
            <div className="task-list-header">
                <button className='button button-default' onClick={toggleFormHandler}>
                    + New Task
                    </button>
            </div>
            {state.showNewCardForm && (
                <form className='task-list-form' onSubmit={createTaskHandler}>
                    <input
                        className='full-width-input'
                        onChange={titleChangeHandler}
                        value={state.title}
                        type='text'
                        placeholder='title' />

                    <input
                        className='full-width-input'
                        onChange={descriptionChangeHandler}
                        value={state.description}
                        type="text"
                        placeholder='description'
                    />

                    <button className='button' type='submit'>
                        Save
                        </button>

                </form>
            )}

            <div className='task-lists'>
                {renderTaskLists()}
            </div>
        </div>
    )
}

export default TasksPage;