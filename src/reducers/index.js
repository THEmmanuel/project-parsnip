import {uniqueId} from '../actions/index';

const mockTasks = [
    {
        id: uniqueId(),
        title: 'Learn Redux',
        description: 'The store, actions, and reducers, oh my!',
        status: 'In Progress',
    },
    {
        id: uniqueId(),
        title: 'Peace on Earth',
        description: 'No big deal.',
        status: 'In Progress',
    },
]


const tasks = (state = {tasks : mockTasks}, action) => {
    return state
}

export default tasks;