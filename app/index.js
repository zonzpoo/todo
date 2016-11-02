import React from 'react';
import { render } from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import App from './App';

const root = document.getElementById("root");
const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>, root
);

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextReducer = require('./reducers');
        store.replaceReducer(nextReducer);
    })
}