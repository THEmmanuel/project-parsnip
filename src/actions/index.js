import axios from 'axios';
import { CALL_API } from '../middleware/api'
import * as api from '../api/index'

let _id = 1;

const getTaskById = (tasks, id) => {
    return tasks.find(task => task.id === id)
}

// const fetchTasksStarted = () => {
//     return { type: 'FETCH_TASKS_STARTED', }
// }

export const FETCH_TASKS_STARTED = 'FETCH_TASKS_STARTED';
export const FETCH_TASKS_SUCCEEDED = 'FETCH_TASKS_SUCCEEDED';
export const FETCH_TASKS_FAILED = 'FETCH_TASKS_FAILED';

// const fetchTasksFailed = error => {
//     return {
//         type : 'FETCH_TASKS_FAILED',
//         payload : {
//             error,
//         }
//     }
// }

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
    return {
        [CALL_API]: {
            types: [FETCH_TASKS_STARTED, FETCH_TASKS_FAILED, FETCH_TASKS_SUCCEEDED],
            endpoint: '/tasks',
        }
    }


    // return dispatch => {
    //     dispatch(fetchTasksStarted());
    //     api.fetchTasks().then(res => {
    //         throw new Error ('Unable to fetch tasks due to some error')
    //     }).catch(err => {
    //         dispatch(fetchTasksFailed(err.message));
    //     })
    // }
}

// export const fetchTasksSucceeded = tasks => {
//     return {
//         type: 'FETCH_TASKS_SUCECEDED',
//         payload: {
//             tasks
//         },
//     }
// }


export const createTaskSucceeded = task => {
    return {
        type: 'CREATE_TASK_SUCCEEDED',
        payload: {
            task,
        },
        meta: {
            analytics: {
                event: 'create_task',
                data: {
                    id: task.id,
                }
            }
        }
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