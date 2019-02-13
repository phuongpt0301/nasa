import {
    FETCHING_LIST,
    FETCH_DATA_LIST_SUCCESS,
    FETCH_DATA_LIST_FAILED,
    HANDLE_CURRENT_ITEM_SUCCESS,
    HANDLE_MODAL_EDIT_ITEM_SUCCESS,
    FETCHING_UPDATE,
    FETCH_DATA_UPDATE_SUCCESS,
    FETCH_DATA_UPDATE_FAILED,
    FETCHING_DELETE,
    FETCH_DATA_DELETE_SUCCESS,
    FETCH_DATA_DELETE_FAILED,
    FETCHING_LIKE,
    FETCH_DATA_LIKE_SUCCESS,
    FETCH_DATA_LIKE_FAILED
} from '../private/constants';

import { saveState } from '../components/common/localStorage';

const initState = {
    data: [],
    isShow: false,
    isEditShow: false,
    loading: false,
    loadingUpdate: false
};

export function list(state = initState, action) {
    switch (action.type) {
        case FETCHING_LIST:
        case FETCH_DATA_LIST_SUCCESS:
        case FETCH_DATA_LIST_FAILED:
        case HANDLE_CURRENT_ITEM_SUCCESS:
        case HANDLE_MODAL_EDIT_ITEM_SUCCESS:
        case FETCHING_UPDATE:
        case FETCH_DATA_UPDATE_FAILED:
        case FETCHING_DELETE:
        case FETCH_DATA_DELETE_FAILED:
        case FETCHING_LIKE:
        case FETCH_DATA_LIKE_FAILED:
            return { ...state, ...action };
        case FETCH_DATA_UPDATE_SUCCESS:
            const updatedItems = state.data.map(item => {
                if(item.id == action.items.id) {
                    return {...item, ...action.items};
                }
                return item;
            });
            saveState(updatedItems);
            return { data: updatedItems };
        case FETCH_DATA_DELETE_SUCCESS:
            const items = state.data.filter(item => item.id != action.items.id);
            saveState(items);
            return { data: items };
        case FETCH_DATA_LIKE_SUCCESS:
            const updatedLike = state.data.map(item => {
                if(item.id == action.items.id) {
                    return {...item, liked: !action.items.liked};
                }
                return item;
            });
            saveState(updatedLike);
            return { data: updatedLike };
        default:
            return { ...state };
    }
}
