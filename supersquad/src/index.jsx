import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducers from './reducers';
import { addCharacterById } from './actions';

const store = createStore(rootReducers);
store.dispatch(addCharacterById(2));

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
