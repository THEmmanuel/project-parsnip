import axios from 'axios';
import * as api from '../api/index'

let _id = 1;

const getTaskById = (tasks, id) => {
    return tasks.find(task => task.id === id)
}

const fetchTasksStarted = () => {
    return { type: 'FETCH_TASKS_STARTED', }
}

export const uniqueId = () => {
    return _id++
}

export const createTask = ({ title, description, status = 'Unstarted' }) => {
    return dispatch => {
        api.createTask({
            title,
            description,
            status
        }).then(res => {
            dispatch(createTaskSucceeded(res.data));
        })
    }
}

export const editTask = (id, params = {}) => {
    return (dispatch, getState) => {
        const task = getTaskById(getState().tasks.tasks, id);
        const updatedTask = Object.assign({}, task, params);

        api.editTask(id, updatedTask).then(res => {
            dispatch(editTaskSucceeded(res.data));
        })
    }
}

export const fetchTasks = () => {
    return dispatch => {
        dispatch(fetchTasksStarted());

        api.fetchTasks().then(res => {
            setTimeout(() => {
                dispatch(fetchTasksSucceeded(res.data))
            }, 2000)
        })
    }
}

export const fetchTasksSucceeded = tasks => {
    return {
        type: 'FETCH_TASKS_SUCECEDED',
        payload: {
            tasks
        }
    }
}


export const createTaskSucceeded = task => {
    return {
        type: 'CREATE_TASK_SUCCEEDED',
        payload: {
            task,
        },
    };
}

export const editTaskSucceeded = task => {
    return {
        type: 'EDIT_TASK_SUCCEEDED',
        payload: {
            task,
        }
    }
}