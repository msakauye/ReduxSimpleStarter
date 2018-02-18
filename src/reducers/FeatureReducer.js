import {
    FETCH_FEATURE
} from '../actions/types';

export default function(state = '', action) {
    switch (action.type) {
        case FETCH_FEATURE:
            return action.payload;
    }

    return state;
}