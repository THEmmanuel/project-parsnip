import axios from 'axios';
import * as api from '../api/index'

let _id = 1;

const getTaskById = (tasks, id) => {
    return tasks.find(task => task.id === id)
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
        api.fetchTasks().then(res => {
            dispatch(fetchTasksSucceeded(res.data))
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