import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension'
import App from './App';
import tasks from './reducers/index';
import { tasksReducer, projectsReducer } from './reducers/index';
import thunk from 'redux-thunk';
import logger from './middleware/logger'
import analytics from './middleware/analytics'
import apiMiddleware from './middleware/api'

const rootReducer = (state = {}, action) => {
  return {
    tasks: tasksReducer(state.tasks, action),
    projects: projectsReducer(state.projects, action)
  }
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, apiMiddleware, logger, analytics)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();