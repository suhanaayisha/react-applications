import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import FavoriteAnimeList from './components/FavoriteAnimeList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/favorites' element={<FavoriteAnimeList/>} />
            </Routes>
        </BrowserRouter>       
    </Provider>
);
