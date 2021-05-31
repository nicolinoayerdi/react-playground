import { ADD_TODO, CLEAR, SET_VISIBILITY_FILTER, TOGGLE_TODO } from './actions';

let nextTodoId = 0;

export const addTodo = (text: string) => {
    return {
        type: ADD_TODO,
        text,
        id: nextTodoId++,
    };
};

export const toggleTodo = (id: number) => {
    return { type: TOGGLE_TODO, id };
};

export const setVisibilityFilter = (filter: any) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter,
    };
};

export const clear = () => {
    return { type: CLEAR };
};
