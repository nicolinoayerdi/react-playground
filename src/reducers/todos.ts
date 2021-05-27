import { ADD_TODO, CLEAR, TOGGLE_TODO } from '../actions/actions';

const todo = (state: any, action: any) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false,
            };
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed,
            };
        default:
            return state;
    }
};

export const todos = (state = [], action: any) => {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, todo(undefined, action)];
        }
        case TOGGLE_TODO:
            return state.map((t: any) => todo(t, action));
        case CLEAR:
            return [];

        default:
            return state;
    }
};
