import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './redux/index.jsx';
// import App from './app';
// import HookTest from './hook';
render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('app'));
