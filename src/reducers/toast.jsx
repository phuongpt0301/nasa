import {
    TOAST_SHOW,
    TOAST_HIDE,
} from '../private/constants';

const initState = {
    isShow: false
};

export function toast(state = initState, action) {
    switch (action.type) {
        case TOAST_SHOW:
        case TOAST_HIDE:
            return { ...state, ...action };
        default:
            return { ...state };
    }
}
