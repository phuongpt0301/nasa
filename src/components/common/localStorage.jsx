export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('nasaCollection');
        return serializedState === null ? [] : JSON.parse(serializedState);
    } catch(error) {
        return error;
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('nasaCollection', serializedState);
    } catch(error) {
        return error;
    }
}