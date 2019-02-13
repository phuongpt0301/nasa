import {
    TOAST_SHOW,
    TOAST_HIDE
} from '../private/constants';

export function toastShow() {
    return {
        type: TOAST_SHOW
    };
}

export function toastHide() {
    return {
        type: TOAST_HIDE
    };
}