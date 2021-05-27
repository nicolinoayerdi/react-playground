import { combineReducers, createStore } from 'redux';

import { todos } from './todos';
import { visibilityFilter } from './visibilityFilter';

const todoApp = combineReducers({
    todos,
    visibilityFilter,
});

export const store = createStore(
    todoApp,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
