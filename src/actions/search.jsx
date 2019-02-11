import {
    FETCHING_SEARCH,
    FETCH_DATA_SEARCH_SUCCESS,
    FETCH_DATA_SEARCH_FAILED
} from '../private/constants';

import HomeApi from '../api/HomeApi';

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

export function fetchDataSearch(strSearch) {

    return async (dispatch) => {
        dispatch(loading({ loading: true }));

        const response = await HomeApi.search(strSearch);

        if (!response) {
            return dispatch(fetchDataSearchError({ error: true, message: 'Error', loading: false }));
        }

        dispatch(fetchDataSearchSuccess({ ...response, error: false, message: '', loading: false }));
    };
}
