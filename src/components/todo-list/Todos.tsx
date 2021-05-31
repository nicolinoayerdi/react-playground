import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@material-ui/core';

import { addTodo, clear, toggleTodo } from '../../actions';

import Footer from './Footer';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const Todos = () => {
    const dispatch = useDispatch();
    let todos = useSelector((state: any) => state.todos);
    let visibilityFilter = useSelector((state: any) => state.visibilityFilter);

    const getVisibleTodos = (todos: any, filter: any) => {
        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_COMPLETED':
                return todos.filter((t: any) => t.completed);
            case 'SHOW_ACTIVE':
                return todos.filter((t: any) => !t.completed);
        }
    };

    return (
        <Box p={4}>
            <div>
                <Button onClick={() => dispatch(clear())}>Clear</Button>
            </div>
            <AddTodo onAddClick={(text: string) => dispatch(addTodo(text))} />
            <TodoList
                todos={getVisibleTodos(todos, visibilityFilter)}
                onTodoClick={(id: any) => dispatch(toggleTodo(id))}
            />
            <Footer />
        </Box>
    );
};

export default Todos;
