import {
    FETCHING_LIST,
    FETCH_DATA_LIST_SUCCESS,
    FETCH_DATA_LIST_FAILED,
    HANDLE_CURRENT_ITEM_SUCCESS,
    HANDLE_MODAL_EDIT_ITEM_SUCCESS,
    FETCHING_UPDATE,
    FETCH_DATA_UPDATE_SUCCESS,
    FETCH_DATA_UPDATE_FAILED
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
        default:
            return { ...state };
    }
}
