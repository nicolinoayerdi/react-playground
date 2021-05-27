import React from 'react';
import { useDispatch } from 'react-redux';

import { SET_VISIBILITY_FILTER } from './actions/actions';

const FilterLink = ({ filter, currentFilter, children }: any) => {
    const dispatch = useDispatch();

    if (filter === currentFilter) {
        return <span>{children}</span>;
    }

    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                dispatch({
                    type: SET_VISIBILITY_FILTER,
                    filter,
                });
            }}
        >
            {children}
        </a>
    );
};

export default FilterLink;
