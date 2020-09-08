import axios from 'axios';
import * as api from '../api/index'

let _id = 1;

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
    return {
        type: 'EDIT_TASK',
        payload: {
            id,
            params
        }
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

export const fetchTasks = () => {
    return dispatch => {
        api.fetchTasks().then(res => {
            dispatch(fetchTasksSucceeded(res.data))
        })
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