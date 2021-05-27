import { SET_VISIBILITY_FILTER } from '../actions/actions';

export const visibilityFilter = (state = 'SHOW_ALL', action: any) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};
