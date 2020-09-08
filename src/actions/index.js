import axios from 'axios';

let _id = 1;

export const uniqueId = () => {
    return _id++
}

export const createTask = ({ title, description }) => {
    return {
        type: 'CREATE_TASK',
        payload: {
            id: uniqueId(),
            title,
            description,
            status: 'Unstarted'
        },
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
        axios.get('http://localhost:3000/tasks:')
            .then(res => {
                dispatch(fetchTasksSucceeded(res.data))
            })
    }
}