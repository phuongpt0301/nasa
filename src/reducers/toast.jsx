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
        return { ...state, isShow: true };
        case TOAST_HIDE:
            return { ...state, isShow: false };
        default:
            return { ...state };
    }
}
