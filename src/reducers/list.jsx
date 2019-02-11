import {
    FETCHING_LIST,
    FETCH_DATA_LIST_SUCCESS,
    FETCH_DATA_LIST_FAILED
} from '../private/constants';

const initState = {
    data: [],
    loading: false
};

export function list(state = initState, action) {
    switch (action.type) {
        case FETCHING_LIST:
        case FETCH_DATA_LIST_SUCCESS:
        case FETCH_DATA_LIST_FAILED:
            return { ...state, ...action };
        default:
            return { ...state };
    }
}
