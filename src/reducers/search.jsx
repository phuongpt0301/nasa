import {
    FETCHING_SEARCH,
    FETCH_DATA_SEARCH_SUCCESS,
    FETCH_DATA_SEARCH_FAILED
} from '../private/constants';
    
const initState = {
    collection: [],
    loading: false
};
    
export function search(state = initState, action) {
    switch (action.type) {
        case FETCHING_SEARCH:
        case FETCH_DATA_SEARCH_SUCCESS:
        case FETCH_DATA_SEARCH_FAILED:
            return { ...state, ...action };
        default:
            return { ...state };
    }
}