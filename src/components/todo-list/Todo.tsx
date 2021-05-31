import { ListItem } from '@material-ui/core';
import React from 'react';

const Todo = ({ completed, text, onClick }: any) => {
    let crossed = completed ? { textDecoration: 'line-through' } : undefined;

    return (
        <ListItem style={crossed} onClick={onClick}>
            {text}
        </ListItem>
    );
};

export default Todo;
