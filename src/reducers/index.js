const initialState = {
    tasks: [],
    isLoading: false,
    error: null
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_TASK': {
            return { tasks: state.tasks.concat(action.payload) }
        }

        case 'FETCH_TASKS_FAILED' : {
            return {
                ...state,
                isLoading : false,
                error: action.payload.error
            }
        }

        case 'FETCH_TASKS_STARTED': {
            return {
                ...state,
                isLoading: true,
            }
        }

        case 'EDIT_TASK': {
            const { payload } = action;
            return {
                tasks: state.tasks.map(task => {
                    if (task.id === payload.id) {
                        return Object.assign({}, task, payload.params);
                    }
                    return task;
                })
            }
        }

        case 'FETCH_TASKS_SUCCEEDED': {
            return {
                ...state,
                isLoading: false,
                tasks: action.payload,
            };
        }

        case 'CREATE_TASK_SUCCEEDED': {
            return {
                ...state,
                tasks: state.tasks.concat(action.payload.task)
            }
        }

        case 'EDIT_TASK_SUCCEEDED': {
            const { payload } = action;
            const nextTasks = state.tasks.map(task => {
                if (task.id === payload.task.id) {
                    return payload.task;
                }
                return task;
            })
            return {
                ...state,
                tasks: nextTasks,
            };
        }

        default: {
            return state
        }
    }
}

export default tasks;