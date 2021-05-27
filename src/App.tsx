import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import TodoList from './TodoList';
import { store } from './reducers';

function App() {
    return (
        <div>
            <Provider store={store}>
                <TodoList />
            </Provider>
        </div>
    );
}

export default App;
