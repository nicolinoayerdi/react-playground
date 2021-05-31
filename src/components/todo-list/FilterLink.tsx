import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { setVisibilityFilter } from '../../actions';

import Link from './Link';

const FilterLink = ({ filter, children }: any) => {
    const visibilityFilter = useSelector((state: any) => state.visibilityFilter);
    const dispatch = useDispatch();

    return (
        <Link
            active={filter === visibilityFilter}
            onClick={() => dispatch(setVisibilityFilter(filter))}
        >
            {children}
        </Link>
    );
};

export default FilterLink;
