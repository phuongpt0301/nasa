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

import { saveState, loadState } from '../components/common/localStorage';
import { toastShow } from './toast';

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

export function fetchDataList() {

    return async (dispatch) => {
        dispatch(loading({ loading: true }));

        const data = loadState();
        
        if (!data) {
            return dispatch(fetchDataListError({ error: true, message: 'Error', loading: false }));
        }
        dispatch(fetchDataListSuccess({ data, error: false, message: '', loading: false }));
    };
}

export function fetchDataListAfterAdd(item) {
    return async (dispatch) => {

        const data = loadState();
        if (!data) {
            return dispatch(fetchDataListError({ error: true, message: 'Error', loading: false }));
        }

        data.push(item);

        saveState(data);
        dispatch(fetchDataListSuccess({ data, error: false, message: '', loading: false }));
    };
}

export function handleDataItemCurrent(item) {
    return (dispatch) => {
        dispatch({ 
            type: HANDLE_CURRENT_ITEM_SUCCESS,
            ...item
        });
    };
}

export function handleModalEditItem(item) {
    return (dispatch) => {
        dispatch({ 
            type: HANDLE_MODAL_EDIT_ITEM_SUCCESS,
            ...item
        });
    };
}

function fetchDataUpdateError(items) {
    return {
        type: FETCH_DATA_UPDATE_FAILED,
        ...items
    };
}

function loadingUpdate(items) {
    return {
        type: FETCHING_UPDATE,
        ...items
    };
}

function fetchDataUpdateSuccess(items) {
    return {
        type: FETCH_DATA_UPDATE_SUCCESS,
        ...items
    };
}

export function fetchDataUpdate(items) {
    return (dispatch) => {
        dispatch(loadingUpdate({ loadingUpdate: true }));
        if (!items) {
            return dispatch(fetchDataUpdateError({ error: true, message: 'Error', loading: false }));
        }

        dispatch(fetchDataUpdateSuccess({ items, error: false, message: '', loading: false }));
        dispatch(toastShow())
    };
}

/** delete */
function fetchDataDeleteError(items) {
    return {
        type: FETCH_DATA_DELETE_FAILED,
        ...items
    };
}

function loadingDelete(items) {
    return {
        type: FETCHING_DELETE,
        ...items
    };
}

function fetchDataDeleteSuccess(items) {
    return {
        type: FETCH_DATA_DELETE_SUCCESS,
        ...items
    };
}

export function deleteDataItem(items) {
    return (dispatch) => {
        dispatch(loadingDelete({ loadingDelete: true }));
        if (!items) {
            return dispatch(fetchDataDeleteError({ error: true, message: 'Error', loading: false }));
        }

        dispatch(fetchDataDeleteSuccess({ items, error: false, message: '', loading: false }));
    };
}

/** end delete */

/** like */
function fetchDataLikeError(items) {
    return {
        type: FETCH_DATA_LIKE_FAILED,
        ...items
    };
}

function loadingLike(items) {
    return {
        type: FETCHING_LIKE,
        ...items
    };
}

function fetchDataLikeSuccess(items) {
    return {
        type: FETCH_DATA_LIKE_SUCCESS,
        ...items
    };
}

export function likeDataItem(items) {
    return (dispatch) => {
        dispatch(loadingLike({ loadingLike: true }));
        if (!items) {
            return dispatch(fetchDataLikeError({ error: true, message: 'Error', loading: false }));
        }

        dispatch(fetchDataLikeSuccess({ items, error: false, message: '', loading: false }));
    };
}

/** end like */