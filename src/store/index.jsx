import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createHashHistory } from 'history';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from '../reducers';
import { saveState, loadState } from '../components/common/localStorage';

const persistConfig = {
    key: 'root',
    stateReconciler: autoMergeLevel2,
    storage,
    whitelist: ['dataList'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (initialState) => {
    const logger = createLogger();

    const reduxRouterMiddleware = routerMiddleware(createHashHistory());
    const middleware = [thunk, reduxRouterMiddleware, logger];

    const enhancer = applyMiddleware(...middleware);

    const persistedState = loadState();

    const store = createStore(
        persistedReducer,
        initialState,
        enhancer,
        persistedState
    );

    store.subscribe(() => {
        saveState(store.getState())
    })

    let persistor = persistStore(store);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(
                persistReducer(persistConfig, nextRootReducer)
            );
        });
    }

    return { store, persistor };
};
