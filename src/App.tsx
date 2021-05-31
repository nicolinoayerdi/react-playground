import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Todos from './components/todo-list/Todos';
import { store } from './reducers';

function App() {
    return (
        <div>
            <Provider store={store}>
                <Todos />
            </Provider>
        </div>
    );
}

export default App;
