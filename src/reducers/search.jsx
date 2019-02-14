import {
    FETCHING_SEARCH,
    FETCH_DATA_SEARCH_SUCCESS,
    FETCH_DATA_SEARCH_FAILED,
    HANDLE_MODAL_ADD_ITEM_SUCCESS,
    FETCHING_ADD,
    FETCH_DATA_ADD_SUCCESS,
    FETCH_DATA_ADD_FAILED
} from '../private/constants';
    
const initState = {
    collection: [],
    loading: false,
    isShow: false,
    currentPage: 1,
    totalPages: 1,
    limit: 100,
};
    
export function search(state = initState, action) {
    switch (action.type) {
        case FETCHING_SEARCH:
        case FETCH_DATA_SEARCH_FAILED:
        case HANDLE_MODAL_ADD_ITEM_SUCCESS:
        case FETCHING_ADD:
        case FETCH_DATA_ADD_SUCCESS:
        case FETCH_DATA_ADD_FAILED:
            return { ...state, ...action };
        case FETCH_DATA_SEARCH_SUCCESS:
            let totalPages = 1;

            if(action.collection && action.collection.metadata && action.collection.metadata.total_hits) {
                totalPages = action.collection.metadata.total_hits;
            }
            return { ...state, ...action, totalPages };
        default:
            return { ...state };
    }
}