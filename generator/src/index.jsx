import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { thunk } from 'redux-thunk';

import { fetchMemes } from './actions';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchMemes());

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App/>
    </Provider>
);
