import {
    FETCHING_LIST,
    FETCH_DATA_LIST_SUCCESS,
    FETCH_DATA_LIST_FAILED
} from '../private/constants';

import { saveState, loadState } from '../common/localStorage';

function fetchDataListError(items) {
    return {
        type: FETCH_DATA_LIST_FAILED,
        ...items
    };
}

function loading(items) {
    return {
        type: FETCHING_LIST,
        ...items
    };
}

export function fetchDataListSuccess(items) {
    return {
        type: FETCH_DATA_LIST_SUCCESS,
        ...items
    };
}

export function fetchDataList(data) {

    return async (dispatch) => {
        dispatch(loading({ loading: true }));

        let dataState = loadState();
        
        if (!dataState) {
            return dispatch(fetchDataListError({ error: true, message: 'Error', loading: false }));
        }

        dataState = Object.assign(...dataState, data);

        saveState(dataState);
        dispatch(fetchDataListSuccess({ ...dataState, error: false, message: '', loading: false }));
    };
}
