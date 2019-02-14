import {
    FETCHING_SEARCH,
    FETCH_DATA_SEARCH_SUCCESS,
    FETCH_DATA_SEARCH_FAILED,
    HANDLE_MODAL_ADD_ITEM_SUCCESS,
    FETCHING_ADD,
    FETCH_DATA_ADD_SUCCESS,
    FETCH_DATA_ADD_FAILED
} from '../private/constants';

import HomeApi from '../api/HomeApi';
import { fetchDataListAfterAdd } from './list';
import { toastShow } from './toast';

function fetchDataSearchError(items) {
    return {
        type: FETCH_DATA_SEARCH_FAILED,
        ...items
    };
}

function loading(items) {
    return {
        type: FETCHING_SEARCH,
        ...items
    };
}

export function fetchDataSearchSuccess(items) {
    return {
        type: FETCH_DATA_SEARCH_SUCCESS,
        ...items
    };
}

export function fetchDataSearch(page = 1, strSearch) {

    return async (dispatch) => {
        dispatch(loading({ loading: true }));

        const response = await HomeApi.search(page, strSearch);

        if (!response) {
            return dispatch(fetchDataSearchError({ error: true, message: 'Error', loading: false }));
        }

        dispatch(fetchDataSearchSuccess({ ...response, error: false, message: '', loading: false, currentPage: page }));
    };
}

export function handleModalAddItem(item) {
    return (dispatch) => {
        dispatch({ 
            type: HANDLE_MODAL_ADD_ITEM_SUCCESS,
            ...item
        });
    };
}

function fetchDataAddError(items) {
    return {
        type: FETCH_DATA_ADD_FAILED,
        ...items
    };
}

function loadingAdd(items) {
    return {
        type: FETCHING_ADD,
        ...items
    };
}

function fetchDataAddSuccess(items) {
    return {
        type: FETCH_DATA_ADD_SUCCESS,
        ...items
    };
}

export function fetchDataAdd(items) {
    return (dispatch, getState) => {
        dispatch(loadingAdd({ loadingAdd: true }));
        if (!items) {
            return dispatch(fetchDataAddError({ error: true, message: 'Error', loading: false }));
        }
        const { dataSearch } = getState();

        dispatch(fetchDataAddSuccess({ error: false, message: '', loading: false }));
        dispatch(toastShow());
        dispatch(handleModalAddItem({ currentItem: {}, isShow: !dataSearch.isShow}))
        dispatch(fetchDataListAfterAdd(items));
    };
}