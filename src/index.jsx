import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';

import history from './history';
import App from './components/App';

import configureStore from './store';

const { store, persistor } = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
                <App />
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

module.hot.accept();