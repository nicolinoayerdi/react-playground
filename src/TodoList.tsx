import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, List, ListItem, TextField } from '@material-ui/core';

import { ADD_TODO, CLEAR, TOGGLE_TODO } from './actions/actions';
import FilterLink from './FilterLink';

let nextTodoId = 0;

const TodoList = () => {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();
    let todos = useSelector((state: any) => state.todos);
    let visibilityFilter = useSelector((state: any) => state.visibilityFilter);

    const getListItem = (todo: any) => {
        let crossed = todo.completed ? { textDecoration: 'line-through' } : undefined;

        return (
            <ListItem
                key={todo?.id}
                style={crossed}
                onClick={() => dispatch({ type: TOGGLE_TODO, id: todo.id })}
            >
                {todo?.text}
            </ListItem>
        );
    };

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

    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

    return (
        <Box p={4}>
            <div>
                <Button onClick={() => dispatch({ type: CLEAR })}>Clear</Button>
            </div>
            <div>
                <TextField value={input} onChange={(event) => setInput(event.target.value)} />
                <Button
                    onClick={() => {
                        dispatch({
                            type: ADD_TODO,
                            text: input,
                            id: nextTodoId++,
                        });
                        setInput('');
                    }}
                >
                    Add Todo
                </Button>
                <List>{visibleTodos.map((todo: any) => getListItem(todo))}</List>
            </div>
            <p>
                Show:{' '}
                <FilterLink currentFilter={visibilityFilter} dispatch={dispatch} filter="SHOW_ALL">
                    All
                </FilterLink>
                {', '}
                <FilterLink currentFilter={visibilityFilter} filter="SHOW_ACTIVE">
                    Active
                </FilterLink>
                {', '}
                <FilterLink currentFilter={visibilityFilter} filter="SHOW_COMPLETED">
                    Completed
                </FilterLink>
            </p>
        </Box>
    );
};

export default TodoList;
