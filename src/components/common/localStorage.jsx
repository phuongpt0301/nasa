export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('dataList');
        return serializedState === null ? [] : JSON.parse(serializedState);
    } catch(error) {
        return error;
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('dataList', serializedState);
    } catch(error) {
        return error;
    }
}