import { List } from '@material-ui/core';
import React from 'react';

import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }: any) => {
    return (
        <List>
            {todos.map((todo: any) => (
                <Todo
                    key={todo?.id}
                    completed={todo.completed}
                    text={todo.text}
                    onClick={() => onTodoClick(todo.id)}
                />
            ))}
        </List>
    );
};

export default TodoList;
