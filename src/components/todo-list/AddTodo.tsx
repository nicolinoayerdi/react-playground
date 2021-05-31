import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const AddTodo = ({ onAddClick }: any) => {
    const [input, setInput] = useState('');

    return (
        <div>
            <TextField value={input} onChange={(event) => setInput(event.target.value)} />
            <Button onClick={(e) => onAddClick(input)}>Add Todo</Button>
        </div>
    );
};

export default AddTodo;
